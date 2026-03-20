import { PageTransition } from "@/components/PageTransition";
import { Link } from "wouter";
import { ArrowRight, CalendarDays, HeartHandshake, MapPin } from "lucide-react";

const eventDetails = [
  {
    id: "creative-social-club",
    eyebrow: "Creative club",
    title: "Creative and social experiences",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=900&fit=crop",
    intro:
      "These sessions bring participants together through art, music, cooking, and shared group moments that feel calm, encouraging, and genuinely inclusive.",
    points: [
      "Small group formats for confidence-building",
      "Support workers who guide participation at each person's pace",
      "Activities designed around joy, expression, and social connection",
    ],
  },
  {
    id: "garden-community-days",
    eyebrow: "Outdoor support",
    title: "Community garden and outdoor days",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&h=900&fit=crop",
    intro:
      "Outdoor routines can be grounding and restorative. These experiences create space for fresh air, sensory calm, practical activity, and community belonging.",
    points: [
      "Supported gardening and outdoor wellbeing routines",
      "Gentle activity that encourages independence and teamwork",
      "Meaningful shared moments in low-pressure community settings",
    ],
  },
  {
    id: "active-lifestyle-sessions",
    eyebrow: "Lifestyle sessions",
    title: "Movement, sport, and active support",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=900&fit=crop",
    intro:
      "Active sessions are shaped around comfort, safety, and positive momentum. We focus on participation, not pressure, so people feel supported while trying something new.",
    points: [
      "Inclusive physical activity and light sport sessions",
      "Confidence-focused support for trying new experiences",
      "A warm environment that helps participants stay engaged and encouraged",
    ],
  },
];

export default function Events() {
  return (
    <PageTransition>
      <section className="page-header-gradient pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-semibold mb-5 border border-white/20">
            <CalendarDays size={15} />
            Community events
          </span>
          <h1 className="text-5xl font-display font-bold text-white mb-4">Support experiences and lifestyle events</h1>
          <p className="text-lg text-white/75 max-w-3xl mx-auto leading-relaxed">
            A closer look at the kinds of community, creative, and active experiences we support for participants and families.
          </p>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "#F7F5F2" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {eventDetails.map((event, index) => (
            <div
              key={event.id}
              id={event.id}
              className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] rounded-[2rem] border border-[#E8DED1] overflow-hidden bg-white shadow-[0_24px_60px_-34px_rgba(47,47,47,0.2)]"
            >
              <img
                src={event.image}
                alt={event.title}
                className={`h-full min-h-[320px] w-full object-cover ${index % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div className={`p-8 md:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8E6BBF] mb-4">
                  {event.eyebrow}
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2F2F2F] mb-4">
                  {event.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[#5a5a5a] mb-6">
                  {event.intro}
                </p>
                <div className="space-y-3 mb-8">
                  {event.points.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm text-[#4a4a4a]">
                      <HeartHandshake size={16} className="text-[#8E6BBF] mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white"
                    style={{ backgroundColor: "#8E6BBF" }}
                  >
                    Ask about this support <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+61450602904"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
                    style={{ backgroundColor: "#A8C3A0", color: "#2F2F2F" }}
                  >
                    <MapPin size={16} />
                    Talk to our team
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
