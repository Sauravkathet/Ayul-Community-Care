import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { HeartHandshake, ArrowRight, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const exploreCards = [
  {
    title: "Daily support with dignity",
    desc: "See how gentle one-to-one support helps people feel safe, comfortable, and more confident in everyday routines.",
    image: "https://imgs.search.brave.com/rOib_wP2AaB5LHZLjNIJHr6ZObYcsOs8-Jbwnnz_00M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/ODM3ODMzMy9waG90/by9wb3J0cmFpdC1v/Zi1wZW9wbGUtb24t/ZGlzYWJpbGl0eS1o/ZWFsdGgtY2FyZS1h/cnQtd29ya3Nob3At/Y3JlYXRpdmUtcGFp/bnRpbmctb24tY2Fu/dmFzLWFuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QzZE/Umtpc2szUlQ2RTE1/YmNsdm85cVQzQWlk/TjM5YkpURGlsd3lZ/VTc5cz0",
    href: "/events#creative-social-club",
    tag: "Personal care",
  },
  {
    title: "Community outings that build confidence",
    desc: "Explore supported community moments that encourage connection, independence, and joyful participation.",
    image: "https://imgs.search.brave.com/x6mGKrIP6HuIkJf9uThCKdkjIQKVCWu-ggn0pidbieg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MzE1MTM0My9waG90/by9idXNpbmVzcy10/ZWFtd29yay1qb2lu/LWhhbmRzLXRvZ2V0/aGVyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1lbV9oWHVR/R3B6eEhnT3lxY0RJ/bXZjWVd5QWxwMjgx/c0c0MjlIWTRiZVBF/PQ",
    href: "/events#garden-community-days",
    tag: "Community access",
  },
  {
    title: "Movement and lifestyle support",
    desc: "Discover active sessions shaped around encouragement, physical wellbeing, and support tailored to each person.",
    image: "https://imgs.search.brave.com/nMejj95F-685b-bJ4xqfzanbtm7a8A1HACIGfrJ38sw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/MTE3MTA5NS9waG90/by9kaXNhYmlsaXR5/LWhlYWx0aC1jYXJl/LWFydC13b3Jrc2hv/cC1kb3duLXN5bmRy/b21lLXBlb3BsZS1k/b2luZy1hbi1hcnQt/cHJvamVjdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NnAt/WkRTUVhfV0czWl9Q/aUs0eC01dDZueEFS/WmNfQUNrZlBUY0ll/b2VVND0",
    href: "/events#active-lifestyle-sessions",
    tag: "Active living",
  },
];

const clientStories = [
  {
    title: "Supported community living",
    quote:
      "I feel calmer, more confident, and more connected because the support is shaped around what works for me.",
    name: "Maya, Kindred Horizon client",
    description:
      "With steady support and familiar routines, Maya now enjoys regular gardening mornings, local outings, and calmer social experiences that feel safe and meaningful.",
    image: "https://imgs.search.brave.com/oYEeTOrdD9y0c4BgglQVMnmcjLHVwORVtOo4N6QBjNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9taXhlZC1y/YWNlLWZlbWFsZS1m/YW1pbHktcmVsYXhp/bmctMjYwbnctMjMw/MzM3ODY2OS5qcGc",
    href: "/events#garden-community-days",
    cta: "Read full story",
  },
  {
    title: "Growing daily independence",
    quote:
      "The support has helped me do more for myself while still feeling safe, understood, and encouraged every day.",
    name: "Ethan, Kindred Horizon client",
    description:
      "Cooking sessions and daily living support helped Ethan build confidence with routines, meals, and practical skills he can use at home every day.",
    image: "https://imgs.search.brave.com/KwM3ZgnhdsTAMys0bR0mAp_fQd9Cf3MpYxb8E2Rn0_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM2/ODE5NjE1NS9waG90/by9oYXBweS1tYW4t/d2l0aC1kaXNhYmls/aXR5LXNpdHRpbmct/d2l0aC1oYW5kcy1j/bGFzcGVkLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1VUFRr/Ti1oc2lmNVlLTHZk/MGJSOU0tQzA1ZzND/ZUxvMW44SDRuaHBr/VTY4PQc",
    href: "/events#creative-social-club",
    cta: "Read full story",
  },
  {
    title: "Active lifestyle support",
    quote:
      "It feels good to have support that keeps me moving, social, and involved in the things I enjoy most.",
    name: "Jordan, Kindred Horizon client",
    description:
      "Movement-based support gave Jordan a positive way to stay active, social, and connected while working toward wellbeing goals with encouragement.",
    image: "https://imgs.search.brave.com/tySgQKTIhp2HC0O8sh9Oao3fTHDHgk78TxhxG_Qv_Ss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjgw/MjQ4MzYyL3Bob3Rv/L3N0dWRlbnQtaGVs/cGluZy1mcmllbmQt/d2l0aC1kaXNhYmls/aXR5LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1TdUdjYjRn/ellxVGlvWjljZG5S/SG5IZHlSakxuVHFI/YXdzNnRkRXB1WjEw/PQ",
    href: "/events#active-lifestyle-sessions",
    cta: "Read full story",
  },
];

const serviceShowcase = [
  {
    title: "Supported independent living (SIL)",
    description:
      "Shared or individual living support that helps participants feel safe, supported, and more confident in daily routines at home.",
    image: "https://imgs.search.brave.com/AbPY20wV3Nt8Wez6yalYQhEtlv2-NWutKq47yan5G2g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9hZHVsdC1n/cmFuZGRhZ3VodGVy/LXN1cHBvcnRpbmct/aGVyLXNlbmlvci0y/NjBudy0yMTcyNzU3/Mjk1LmpwZw",
    href: "/services",
  },
  {
    title: "Specialist disability accommodation (SDA)",
    description:
      "Purpose-supported accommodation options designed for people with higher support needs, comfort requirements, and long-term stability goals.",
    image: "https://imgs.search.brave.com/rGygvXJRnStTMpslcKEfG2I98QX_qILYGL0-G76VXyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MjcxLzkxNC9zbWFs/bC9hLXBoeXNpY2Fs/LXRoZXJhcGlzdC1p/cy10YWxraW5nLXRv/LWEtZGlzYWJsZWQt/Ym95LWluLWEtd2hl/ZWxjaGFpci1mcmVl/LXBob3RvLmpwZw",
    href: "/services",
  },
  {
    title: "Short and medium-term accommodation",
    description:
      "Flexible respite and shorter stays that offer participants a welcoming environment, renewed energy, and trusted support when needed.",
    image: "https://imgs.search.brave.com/U3nvXJDAZZIA2uCleLhtqZ1EksKACbqHrGQqtHFoByE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUz/MjY3ODAwL3Bob3Rv/L21hbi1pbi13aGVl/bGNoYWlyLWJlaW5n/LWFzc2lzdGVkLXRv/LXdpcGUtZHJ5LWEt/c3Bvb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW1hVXhj/QTVaeURwNFMtU05L/bFpmQURzbVU3M2R5/c0tpbVlvaXV2QWEt/RkU9",
    href: "/services",
  },
];

const faqs = [
  {
    question: "What services does Kindred Horizon Care provide?",
    answer:
      "We provide disability support, personal care, community participation, daily living assistance, support coordination, and supported independent living tailored to each participant's goals.",
  },
  {
    question: "Who can access Kindred Horizon's disability services?",
    answer:
      "Our services are designed for people living with disability, NDIS participants, and families or carers looking for respectful, person-centred support across daily life and community engagement.",
  },
  {
    question: "Is Kindred Horizon an NDIS registered disability service provider?",
    answer:
      "Yes. We operate as an NDIS-focused provider and deliver support with a strong emphasis on safety, dignity, compliance, and quality care standards.",
  },
  {
    question: "Where do you offer disability services in Australia?",
    answer:
      "Our current core service area is Melbourne and surrounding communities, with support shaped around participant needs, availability, and referral pathways.",
  },
  {
    question: "Can families and carers be involved?",
    answer:
      "Absolutely. We welcome the involvement of carers, family members, and support networks so care plans feel collaborative, transparent, and genuinely supportive.",
  },
];

const newsHighlights = [
  {
    title: "Celebrating participant milestones across our community",
    excerpt:
      "A look at the personal wins, shared achievements, and supportive moments that continue to shape everyday life at Kindred Horizon Care.",
    image: "https://imgs.search.brave.com/C1DtQtfMJBn4bihCFJR1WigoECjZlRvNTMOKxo8j79M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/amNmcy5vcmcvc2l0/ZXMvZGVmYXVsdC9m/aWxlcy9zdHlsZXMv/YmFubmVyX2Z1bGxf/Y29udGVudC9wdWJs/aWMvYmFubmVyLWlt/YWdlcy9QZW9wbGUl/MjB3aXRoJTIwRGlz/YWJpbGl0aWVzJTIw/QmFubmVyLmpwZz9p/dG9rPU9VRE13S0h4",
    type: "Article",
    date: "19 March 2026",
    href: "/about",
  },
  {
    title: "Community wellbeing events are on the move",
    excerpt:
      "From local outings to inclusive activity days, our team is creating more ways for participants to stay connected, active, and involved.",
    image: "https://imgs.search.brave.com/tySgQKTIhp2HC0O8sh9Oao3fTHDHgk78TxhxG_Qv_Ss/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjgw/MjQ4MzYyL3Bob3Rv/L3N0dWRlbnQtaGVs/cGluZy1mcmllbmQt/d2l0aC1kaXNhYmls/aXR5LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1TdUdjYjRn/ellxVGlvWjljZG5S/SG5IZHlSakxuVHFI/YXdzNnRkRXB1WjEw/PQ",
    type: "Community",
    date: "26 February 2026",
    href: "/events",
  },
  {
    title: "Meet the newest faces joining the Kindred Horizon team",
    excerpt:
      "Get to know the people bringing fresh energy, professional care, and person-centred support into our growing community.",
    image: "https://imgs.search.brave.com/9m2LNbOqSb_4MTcF4aFMCu4T4xcBhXyI6P10TcSIi4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/OTcxODMwNi9waG90/by9jb29raW5nLWNs/YXNzLWZyaWVuZHMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU5vRTRxTVduTmtL/RVBnS2dNbEVIR2pv/RU1tYktDeGRyRTFl/b1BZaFVaMzg9",
    type: "Article",
    date: "8 January 2026",
    href: "/about",
  },
];

const heroVideoSrc = `${import.meta.env.BASE_URL}ayul-video.mp4`;

export default function Home() {
  const { t } = useTranslation();
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = clientStories[activeStoryIndex];

  const showPreviousStory = () => {
    setActiveStoryIndex((current) => (current === 0 ? clientStories.length - 1 : current - 1));
  };

  const showNextStory = () => {
    setActiveStoryIndex((current) => (current === clientStories.length - 1 ? 0 : current + 1));
  };

  return (
    <PageTransition>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#F7F5F2" }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] sm:text-xs font-semibold shadow-[0_14px_28px_-20px_rgba(47,47,47,0.4)]" style={{ backgroundColor: "rgba(247, 245, 242, 0.92)", color: "#8E6BBF" }}>
                <HeartHandshake size={16} className="text-[#8E6BBF]" />
                Melbourne's Trusted NDIS Provider
              </div>

              <h1 className="mb-5 text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-display font-extrabold text-white leading-[1.05] drop-shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
                {t("hero.title")}
              </h1>

              <p className="mb-8 max-w-2xl text-sm sm:text-base lg:text-lg text-white/92 leading-relaxed drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="px-8 py-4 text-white font-bold rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                  style={{ backgroundColor: "#8E6BBF" }}
                >
                  {t("hero.getStarted")} <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 font-semibold rounded-full border-2 hover:-translate-y-1 transition-all duration-300"
                  style={{ backgroundColor: "rgba(247, 245, 242, 0.92)", color: "#2F2F2F", borderColor: "rgba(247, 245, 242, 0.95)" }}
                >
                  {t("hero.contactUs")}
                </Link>
              </div>

              <div
                className="mt-10 max-w-lg rounded-[1.6rem] px-5 py-4 shadow-[0_24px_70px_-34px_rgba(47,47,47,0.32)]"
                style={{ backgroundColor: "rgba(142, 107, 191, 0.9)" }}
              >
                <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#F7F5F2]">
                  Trusted disability support
                </p>
                <p className="mt-2 text-[0.82rem] sm:text-[0.88rem] text-[#F7F5F2] leading-relaxed">
                  Compassionate, person-centred care delivered with warmth, dignity, and a steady commitment to helping every participant feel supported.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP — BLACK ─────────────────────────────── */}
      <section style={{ backgroundColor: "#E8DED1" }} className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#2F2F2F] font-medium">
            {["NDIS Registered Provider", "Person-Centered Approach", "24/7 Support Available", "Melbourne Based", "Fully Insured & Qualified"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E6BBF]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── LET'S START EXPLORING ───────────────────────────── */}
      <section className="bg-white py-20 dark:bg-background lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "#E6DDF5", color: "#8E6BBF" }}>
                <Sparkles size={15} />
                Let's start exploring
              </span>
              <h2 className="text-3xl md:text-[2.4rem] font-display font-bold text-gray-900 dark:text-white mb-4">
                Explore how we <span className="text-[#8E6BBF] dark:text-[#E6DDF5]">support people with disability</span>
              </h2>
              <p className="text-[#5a5a5a] dark:text-muted-foreground text-base md:text-lg leading-relaxed">
                A quieter, more focused look at the real support we provide across daily care, community access, and lifestyle goals for participants and families.
              </p>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 self-start rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#8E6BBF" }}
            >
              View support stories <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {exploreCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={card.href}
                  className="group block overflow-hidden rounded-[2rem] bg-white border border-[#E8DED1] shadow-[0_18px_48px_-28px_rgba(47,47,47,0.22)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/72 via-[#2F2F2F]/18 to-transparent" />
                    <span
                      className="absolute top-5 left-5 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold"
                      style={{ backgroundColor: "#F7F5F2", color: "#8E6BBF" }}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-[1.35rem] font-display font-bold text-[#2F2F2F] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[0.92rem] leading-relaxed text-[#5a5a5a] mb-5">
                      {card.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#8E6BBF]">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT STORIES ─────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "#A8C3A0", color: "#2F2F2F" }}>
                <Quote size={15} />
                Client stories
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2F2F2F] mb-4">
                Real support, told through everyday moments
              </h2>
              <p className="text-lg leading-relaxed text-[#5a5a5a]">
                A clearer picture of how thoughtful disability support can create confidence, routine, connection, and more independence over time.
              </p>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 self-start rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#E6DDF5", color: "#2F2F2F" }}
            >
              Read more stories <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div
            key={activeStory.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <button
                type="button"
                onClick={showPreviousStory}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#DDD4EA] bg-white text-[#8E6BBF] shadow-[0_12px_30px_-18px_rgba(47,47,47,0.32)] transition-transform duration-200 hover:-translate-x-0.5"
                aria-label="Show previous client story"
              >
                <ChevronLeft size={20} />
              </button>
            </div>

            <div className="pointer-events-none absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 lg:block">
              <button
                type="button"
                onClick={showNextStory}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#DDD4EA] bg-[#8E6BBF] text-white shadow-[0_12px_30px_-18px_rgba(47,47,47,0.32)] transition-transform duration-200 hover:translate-x-0.5"
                aria-label="Show next client story"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="border-b border-[#D9D1C7] pb-8 lg:pb-10">
              <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
                <div className="relative flex min-h-[360px] items-end justify-center overflow-hidden rounded-[2.5rem] bg-[radial-gradient(circle_at_35%_35%,rgba(230,221,245,0.95),rgba(230,221,245,0.55)_38%,transparent_39%),radial-gradient(circle_at_68%_26%,rgba(168,195,160,0.85),rgba(168,195,160,0.35)_18%,transparent_19%),linear-gradient(180deg,#F7F5F2_0%,#E8DED1_100%)] px-6 pt-12">
                  <div className="absolute left-1/2 top-10 h-44 w-44 -translate-x-1/2 rounded-[44%_56%_56%_44%/55%_45%_55%_45%] bg-[#8E6BBF]/14 blur-sm" />
                  <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-[#A8C3A0]/35 blur-2xl" />
                  <img
                    src={activeStory.image}
                    alt={activeStory.name}
                    className="relative z-10 h-[320px] w-full max-w-[420px] rounded-[2rem] object-cover object-center shadow-[0_24px_60px_-34px_rgba(47,47,47,0.45)]"
                  />
                </div>

                <div className="max-w-xl">
                  <Quote size={54} className="mb-4 text-[#8E6BBF]" />
                  <h3 className="text-2xl md:text-[2rem] font-display font-bold text-[#2F2F2F]">
                    {activeStory.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-[1.45rem] leading-[1.3] text-[#2F2F2F] sm:text-[1.7rem] md:text-[2.15rem]">
                    "{activeStory.quote}"
                  </p>
                  <p className="mt-5 text-lg font-semibold text-[#2F2F2F]">
                    {activeStory.name}
                  </p>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#4A4A4A]">
                    {activeStory.description}
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link href={activeStory.href} className="inline-flex items-center gap-2 text-lg font-semibold text-[#8E6BBF]">
                      {activeStory.cta} <ArrowRight size={18} />
                    </Link>

                    <div className="flex items-center gap-2 lg:hidden">
                      <button
                        type="button"
                        onClick={showPreviousStory}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDD4EA] bg-white text-[#8E6BBF]"
                        aria-label="Show previous client story"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={showNextStory}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8E6BBF] text-white"
                        aria-label="Show next client story"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="mx-auto w-full max-w-[1600px] px-0 sm:px-5 lg:px-8">
          <div
            className="mb-16 overflow-hidden border shadow-[0_28px_70px_-38px_rgba(47,47,47,0.18)] sm:rounded-[2.5rem]"
            style={{
              background: "linear-gradient(135deg, #F7F5F2 0%, #EEE5D9 54%, #ECE3F8 100%)",
              borderColor: "#ddd1c2",
            }}
          >
            <div className="border-b px-5 py-9 sm:px-8 md:px-10 lg:px-14 lg:py-12" style={{ borderColor: "rgba(47,47,47,0.10)" }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#2F2F2F]">
                Our disability services
              </h2>
            </div>

            <div className="px-5 py-8 sm:px-8 md:px-10 lg:px-14 lg:py-10">
              <div className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#2F2F2F]">Disability accommodation</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                    Professional support options designed around independence, stability, and a stronger sense of home.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="group inline-flex items-center self-start gap-3 rounded-[1.35rem] border border-white/70 bg-white px-5 py-3.5 text-sm sm:px-6 sm:py-4 sm:text-base font-semibold shadow-[0_16px_36px_-24px_rgba(47,47,47,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ color: "#2F2F2F" }}
                >
                  Learn more <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                {serviceShowcase.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.45 }}
                    className="flex h-full flex-col overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] border border-white/55 bg-white/70 shadow-[0_14px_36px_-24px_rgba(47,47,47,0.22)] backdrop-blur-sm"
                  >
                    <div className="p-3 sm:p-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-56 w-full rounded-[1.4rem] object-cover sm:h-60 sm:rounded-[1.7rem]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-4 pb-5 sm:px-5 sm:pb-6">
                      <h4 className="text-[1.12rem] sm:text-[1.24rem] md:text-[1.32rem] font-display font-bold leading-[1.35] text-[#2F2F2F]">
                        {item.title}
                      </h4>
                      <p className="mt-3 flex-1 text-[0.97rem] sm:text-[1rem] leading-relaxed text-[#5A5A5A]">
                        {item.description}
                      </p>
                      <Link href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#8E6BBF]">
                        Learn more <ArrowRight size={17} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section id="faqs" className="py-20 md:py-24" style={{ backgroundColor: "#2F2F2F" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span
                className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold"
                style={{ backgroundColor: "rgba(230, 221, 245, 0.14)", color: "#E6DDF5" }}
              >
                FAQs
              </span>
              <h2 className="mb-3 text-3xl sm:text-4xl md:text-[2.7rem] font-display font-bold text-[#F7F5F2]">
                Questions we hear often
              </h2>
              <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#F7F5F2]/72">
                Clear answers, simple guidance, and a calmer way to explore support before you speak with our team.
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[1.4rem] bg-white px-6 py-4 text-base font-semibold text-[#2F2F2F] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Contact Kindred Horizon <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border-b border-white/14"
                >
                  <AccordionTrigger className="py-4 text-left text-[1rem] sm:text-[1.12rem] md:text-[1.28rem] font-display font-semibold text-[#F7F5F2] hover:no-underline [&>svg]:text-[#E6DDF5]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-3xl pb-4 text-[0.9rem] leading-relaxed text-[#F7F5F2]/76">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 grid gap-6 rounded-[2rem] border border-white/10 bg-white/4 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8 backdrop-blur-sm">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#F7F5F2]">
                Still have questions?
              </h3>
              <p className="mt-3 max-w-2xl text-base md:text-lg leading-relaxed text-[#F7F5F2]/72">
                If you still have questions, reach out. We're here to help you find the answers and support path that feels right.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-[1.4rem] px-6 py-4 text-base font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#E6DDF5", color: "#2F2F2F" }}
            >
              Talk to us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── STAY CONNECTED ─────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(168,195,160,0.22), transparent 22%), radial-gradient(circle at 70% 16%, rgba(230,221,245,0.32), transparent 28%), radial-gradient(circle at 84% 72%, rgba(232,222,209,0.55), transparent 22%), linear-gradient(180deg, #F7F5F2 0%, #EEF0DE 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 32%, transparent 34%, transparent 66%, rgba(255,255,255,0.18) 68%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold" style={{ backgroundColor: "#E6DDF5", color: "#8E6BBF" }}>
                News & updates
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-[#4B3561]">
                Stay connected
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 self-start rounded-[1rem] px-6 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#4B3561" }}
            >
              View all news <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-8 xl:grid-cols-3">
            {newsHighlights.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="flex h-full flex-col"
              >
                <Link href={item.href} className="group block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full rounded-[1.75rem] object-cover shadow-[0_18px_48px_-28px_rgba(47,47,47,0.24)] sm:h-72"
                  />
                </Link>
                <div className="flex flex-1 flex-col px-1 pt-7">
                  <h3 className="text-[1.5rem] sm:text-[1.7rem] lg:text-[1.9rem] leading-[1.18] font-display font-bold text-[#4B3561]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[1rem] leading-relaxed text-[#2F2F2F]">
                    {item.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                    <span className="rounded-xl px-4 py-2 font-medium" style={{ backgroundColor: "rgba(232,222,209,0.9)", color: "#4B3561" }}>
                      {item.type}
                    </span>
                    <span className="font-medium text-[#4B3561]">{item.date}</span>
                  </div>
                  <div className="mt-7">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-[1rem] border px-7 py-4 text-lg font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: item.type === "Community" ? "#F08A72" : "#FFFFFF",
                        borderColor: item.type === "Community" ? "#F08A72" : "#E0CFC3",
                        color: item.type === "Community" ? "#2F2F2F" : "#4B3561",
                      }}
                    >
                      Read article <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
