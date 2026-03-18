import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

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

    const [inserted] = await db
      .insert(contactsTable)
      .values({ name, email, phone: phone ?? null, message })
      .returning({ id: contactsTable.id });

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
    const contacts = await db
      .select()
      .from(contactsTable)
      .orderBy(desc(contactsTable.createdAt));

    res.json({ contacts });
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({
      error: "Internal server error",
      details: "Failed to retrieve contacts.",
    });
  }
});

export default router;
