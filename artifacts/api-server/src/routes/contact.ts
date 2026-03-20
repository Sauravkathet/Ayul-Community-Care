import { Router, type IRouter } from "express";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { db, contactsTable, hasDatabase } from "@workspace/db";
import { SubmitContactBody, type ContactEntry } from "@workspace/api-zod";
import { desc } from "drizzle-orm";

const router: IRouter = Router();
const workingDirectory = process.cwd();
const apiServerRoot =
  [
    path.resolve(workingDirectory, "artifacts", "api-server"),
    workingDirectory,
  ].find(
    (candidate) =>
      path.basename(candidate) === "api-server" &&
      existsSync(path.join(candidate, "package.json")),
  ) ?? workingDirectory;
const localDataDir = path.resolve(
  apiServerRoot,
  ".local",
);
const localContactsFile = path.join(localDataDir, "contacts.json");

type LocalContactEntry = Omit<ContactEntry, "createdAt"> & {
  createdAt: string;
};

if (!hasDatabase) {
  console.warn(
    `DATABASE_URL is not set. Using local contact storage at ${localContactsFile}.`,
  );
}

async function readLocalContacts(): Promise<LocalContactEntry[]> {
  try {
    const raw = await readFile(localContactsFile, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return [];
    }

    throw error;
  }
}

async function writeLocalContacts(entries: LocalContactEntry[]): Promise<void> {
  await mkdir(localDataDir, { recursive: true });
  await writeFile(localContactsFile, JSON.stringify(entries, null, 2));
}

function toApiContact(entry: LocalContactEntry): ContactEntry {
  return {
    ...entry,
    createdAt: new Date(entry.createdAt),
  };
}

router.post("/contact", async (req, res) => {
  try {
    const parsed = SubmitContactBody.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        error: "Validation failed",
        details: parsed.error.message,
      });
      return;
    }

    const { name, email, phone, message } = parsed.data;

    if (db) {
      const [inserted] = await db
        .insert(contactsTable)
        .values({ name, email, phone: phone ?? null, message })
        .returning({ id: contactsTable.id });

      res.status(201).json({
        success: true,
        message: "Thank you for contacting us. We will get back to you shortly.",
        id: inserted.id,
      });
      return;
    }

    const existingContacts = await readLocalContacts();
    const nextId =
      existingContacts.reduce((maxId, entry) => Math.max(maxId, entry.id), 0) + 1;

    const inserted: LocalContactEntry = {
      id: nextId,
      name,
      email,
      phone: phone ?? null,
      message,
      createdAt: new Date().toISOString(),
    };

    existingContacts.unshift(inserted);
    await writeLocalContacts(existingContacts);

    res.status(201).json({
      success: true,
      message: "Thank you for contacting us. We will get back to you shortly.",
      id: inserted.id,
    });
  } catch (err) {
    console.error("Error saving contact form:", err);
    res.status(500).json({
      error: "Internal server error",
      details: "Failed to save your message. Please try again.",
    });
  }
});

router.get("/contact", async (_req, res) => {
  try {
    if (db) {
      const contacts = await db
        .select()
        .from(contactsTable)
        .orderBy(desc(contactsTable.createdAt));

      res.json({ contacts });
      return;
    }

    const contacts = await readLocalContacts();
    res.json({ contacts: contacts.map(toApiContact) });
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({
      error: "Internal server error",
      details: "Failed to retrieve contacts.",
    });
  }
});

export default router;
