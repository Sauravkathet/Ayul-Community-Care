import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Activity, Home, Users, HeartPulse, UserCheck, ShieldHalf, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "ndis-support",
    icon: ShieldHalf,
    title: "NDIS Support Services",
    desc: "Comprehensive navigation and implementation of your NDIS plan to maximize your funded supports and achieve your personal goals.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop",
    points: ["Plan management", "Support coordination", "Goal setting", "Progress reviews"],
    color: "from-teal-600 to-teal-700",
    lightColor: "bg-teal-50 dark:bg-teal-950/40",
    accentColor: "text-teal-700 dark:text-teal-400",
  },
  {
    id: "personal-care",
    icon: UserCheck,
    title: "Personal Care Assistance",
    desc: "Dignified and respectful support with daily personal activities tailored to your specific routines and preferences.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop",
    points: ["Grooming & hygiene", "Dressing support", "Mobility assistance", "Health monitoring"],
    color: "from-emerald-600 to-emerald-700",
    lightColor: "bg-emerald-50 dark:bg-emerald-950/40",
    accentColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    id: "community",
    icon: Users,
    title: "Community Participation",
    desc: "Empowering you to engage in social, recreational, and civic activities that bring joy and meaning to your life.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=500&fit=crop",
    points: ["Social outings", "Recreational activities", "Volunteer work", "Skills development"],
    color: "from-cyan-600 to-cyan-700",
    lightColor: "bg-cyan-50 dark:bg-cyan-950/40",
    accentColor: "text-cyan-700 dark:text-cyan-400",
  },
  {
    id: "daily-living",
    icon: Activity,
    title: "Daily Living Support",
    desc: "Skill development and assistance to build independence in managing everyday household tasks and routines.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=800&h=500&fit=crop",
    points: ["Meal preparation", "Cleaning & tidying", "Shopping assistance", "Life skills coaching"],
    color: "from-amber-500 to-amber-600",
    lightColor: "bg-amber-50 dark:bg-amber-950/40",
    accentColor: "text-amber-700 dark:text-amber-400",
  },
  {
    id: "disability",
    icon: HeartPulse,
    title: "Disability Support",
    desc: "Specialised, empathetic care adapted to various disabilities, focusing on your capabilities and unique strengths.",
    image: "https://images.unsplash.com/photo-1633525164213-90924436531d?w=800&h=500&fit=crop",
    points: ["Behaviour support", "Therapy assistance", "Medical coordination", "Capacity building"],
    color: "from-rose-500 to-rose-600",
    lightColor: "bg-rose-50 dark:bg-rose-950/40",
    accentColor: "text-rose-700 dark:text-rose-400",
  },
  {
    id: "sil",
    icon: Home,
    title: "Supported Independent Living",
    desc: "24/7 support in a shared or individual home, helping you live as independently and comfortably as possible.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    points: ["24/7 on-call support", "Safe living environment", "Independence goals", "Personalised routines"],
    color: "from-violet-600 to-violet-700",
    lightColor: "bg-violet-50 dark:bg-violet-950/40",
    accentColor: "text-violet-700 dark:text-violet-400",
  },
];

export default function Services() {
  return (
    <PageTransition>

      {/* Page header */}
      <div className="page-header-gradient pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-semibold mb-5 border border-white/20">
            What We Offer
          </span>
          <h1 className="text-5xl font-display font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Comprehensive, person-centered support designed to help you achieve your goals and live your best life.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="absolute bottom-0 left-0 right-0 w-full h-12">
          <path d="M0,60 C480,10 960,10 1440,60 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1.5 transition-all duration-350 border border-border/50 flex flex-col"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity z-10`} />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                {/* Icon floating on image */}
                <div className={`absolute bottom-4 start-4 z-20 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-grow flex flex-col">
                <h3 className="text-xl font-display font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">{service.desc}</p>

                {/* Feature points */}
                <div className="grid grid-cols-2 gap-1.5 mb-6">
                  {service.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 size={13} className={service.accentColor} />
                      {pt}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.accentColor} hover:gap-2.5 transition-all duration-200`}
                >
                  Enquire about this service <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-b from-teal-50/60 to-background dark:from-teal-950/20 dark:to-background py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Not sure which service is right for you?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">Our friendly team will guide you through the options and help you get the most from your NDIS plan.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-teal-700 dark:bg-teal-600 text-white font-semibold rounded-full shadow-lg shadow-teal-700/25 hover:bg-teal-800 hover:-translate-y-0.5 transition-all duration-300"
          >
            Talk to Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </PageTransition>
  );
}
