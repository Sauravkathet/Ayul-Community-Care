import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Users, Clock, ArrowRight, Star, Quote, Phone } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const features = [
  { icon: ShieldCheck, title: "NDIS Registered", desc: "Fully accredited provider ensuring the highest standards of care and compliance." },
  { icon: Users, title: "Experienced Team", desc: "Compassionate professionals dedicated to supporting your unique journey." },
  { icon: HeartHandshake, title: "Person-Centered", desc: "Your goals and preferences are at the heart of everything we do." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock care ensuring you always have the assistance you need." },
];

const services = [
  { title: "NDIS Support Services", emoji: "🛡️", desc: "Expert plan navigation and support coordination." },
  { title: "Personal Care", emoji: "🤝", desc: "Dignified daily personal care and hygiene support." },
  { title: "Community Participation", emoji: "🌏", desc: "Social and recreational community engagement." },
  { title: "Daily Living", emoji: "🏠", desc: "Household tasks and independence building." },
  { title: "Disability Support", emoji: "💜", desc: "Specialised care focused on your capabilities." },
  { title: "Supported Living", emoji: "🌟", desc: "24/7 supported independent living options." },
];

const testimonials = [
  {
    quote: "Ayul Community Care has completely transformed my life. Their team genuinely cares about my wellbeing and helps me achieve things I never thought possible.",
    name: "Sarah M.", role: "NDIS Participant", initials: "SM",
  },
  {
    quote: "As a family carer, I finally feel supported. The team is professional, warm, and truly person-centered. They've become part of our family.",
    name: "James T.", role: "Family Carer", initials: "JT",
  },
  {
    quote: "From the first call, I knew this was different. They listen, adapt, and go above and beyond every single time. Highly recommended.",
    name: "Priya K.", role: "NDIS Participant", initials: "PK",
  },
];

const stats = [
  { value: "500+", label: "Participants" },
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Support Workers" },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageTransition>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#F7F7FB" }}>
        {/* Subtle purple blobs */}
        <div className="absolute top-0 start-0 w-[600px] h-[600px] bg-purple-100/60 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 end-0 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-6">
                <HeartHandshake size={16} className="text-purple-600" />
                Sydney's Trusted NDIS Provider
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-gray-900 dark:text-white leading-[1.08] mb-6">
                {t("hero.title")}
              </h1>

              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full shadow-xl shadow-purple-600/25 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                >
                  {t("hero.getStarted")} <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-full border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300"
                >
                  {t("hero.contactUs")}
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-display font-bold text-purple-700 dark:text-purple-400">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200/40 to-violet-200/30 rounded-[3rem] blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=900&fit=crop"
                alt="Compassionate Care"
                className="relative rounded-[2.5rem] shadow-2xl object-cover h-[540px] w-full border-4 border-white dark:border-gray-800"
              />
              {/* Quality badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute bottom-8 -start-8 bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-2xl flex items-center gap-4"
              >
                <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-xl">
                  <Star className="text-purple-600 fill-purple-500 h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Highest Quality</p>
                  <p className="text-sm text-gray-500">NDIS Care Standards</p>
                </div>
              </motion.div>
              {/* Phone badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-8 -end-6 bg-purple-700 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <Phone size={18} className="text-purple-200" />
                <div>
                  <p className="text-xs text-purple-300">Call us anytime</p>
                  <p className="font-bold text-sm">1800 233 673</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TRUST STRIP — BLACK ─────────────────────────────── */}
      <section style={{ backgroundColor: "#111827" }} className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300 font-medium">
            {["NDIS Registered Provider", "Person-Centered Approach", "24/7 Support Available", "Sydney Based", "Fully Insured & Qualified"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────── */}
      <section className="py-28 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4">
              Why Choose Ayul
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Dedicated to Your <span className="text-purple-700 dark:text-purple-400">Independence</span>
            </h2>
            <p className="text-gray-500 dark:text-muted-foreground text-lg leading-relaxed">
              We believe in empowering you to live life on your own terms with dignity, compassion, and purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-card rounded-3xl p-8 card-purple-hover card-shadow flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center mb-6 shadow-md shadow-purple-600/20">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-500 dark:text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#F7F7FB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive <span className="text-purple-700 dark:text-purple-400">NDIS Support</span>
            </h2>
            <p className="text-gray-500 text-lg">Person-centered care designed around your unique needs and aspirations.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="group bg-white dark:bg-card rounded-2xl p-6 card-purple-hover card-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-md shadow-purple-600/20">
                  {svc.emoji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1">{svc.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg shadow-purple-600/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — BLACK ─────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#111827" }}>
        {/* Subtle purple glow in corner */}
        <div className="absolute top-0 end-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 start-0 w-64 h-64 bg-violet-600/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-4 border border-purple-500/20">
              Testimonials
            </span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Real Stories, <span className="text-purple-400">Real Impact</span>
            </h2>
            <p className="text-gray-400">Hear from the people whose lives we've had the privilege to support.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="rounded-3xl p-8 flex flex-col border border-white/8 hover:border-purple-500/30 transition-colors duration-300"
                style={{ backgroundColor: "#1F2937" }}
              >
                <Quote className="text-purple-500 mb-4" size={28} />
                <p className="text-gray-300 leading-relaxed flex-grow mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-600/20">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats row inside dark section */}
          <div className="mt-20 pt-12 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Participants Supported" },
              { value: "5+", label: "Years of Experience" },
              { value: "50+", label: "Qualified Support Workers" },
              { value: "100%", label: "NDIS Registered" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center"
              >
                <p className="text-4xl font-display font-extrabold text-purple-400 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our friendly team is here to discuss your unique needs and help you access the support you deserve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full shadow-xl hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
            <a
              href="tel:1800233673"
              className="px-10 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={18} /> 1800 233 673
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
