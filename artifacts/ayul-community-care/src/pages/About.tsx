import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";

const values = [
  { text: "Compassion in everything we do", icon: Heart },
  { text: "Respect for individual choices", icon: CheckCircle2 },
  { text: "Excellence in service delivery", icon: Award },
  { text: "Integrity and transparency", icon: Eye },
  { text: "Empowerment for independence", icon: TrendingUp },
  { text: "Community inclusion", icon: Users },
];

const stats = [
  { value: "500+", label: "Lives Impacted" },
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Support Workers" },
  { value: "100%", label: "NDIS Registered" },
];

export default function About() {
  return (
    <PageTransition>

      {/* Header */}
      <div className="page-header-gradient pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-semibold mb-5 border border-white/20">
            Who We Are
          </span>
          <h1 className="text-5xl font-display font-bold text-white mb-4">About Ayul Community Care</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            A trusted NDIS provider dedicated to making a meaningful difference in the lives of individuals with disabilities across Sydney.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="absolute bottom-0 left-0 right-0 w-full h-12">
          <path d="M0,60 C480,10 960,10 1440,60 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Stats bar */}
      <div className="bg-white dark:bg-card border-b border-gray-100 dark:border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 dark:divide-border">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="text-center py-8 px-4"
              >
                <p className="text-3xl font-display font-extrabold text-purple-700 dark:text-purple-400">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-5">
              Our Story
            </span>
            <h2 className="text-4xl font-display font-bold mb-6 text-gray-900 dark:text-white">
              Born from a <span className="text-purple-700 dark:text-purple-400">Genuine Passion</span> to Help
            </h2>
            <div className="space-y-5 text-gray-500 dark:text-muted-foreground leading-relaxed">
              <p>Founded in 2020, Ayul Community Care was born from a deep-rooted passion to support and uplift individuals with disabilities. We recognized a need for care that goes beyond basic assistance — care that is truly person-centered, empathetic, and empowering.</p>
              <p>As a registered NDIS provider based in Sydney, we have grown into a community of dedicated professionals who share a common goal: to help our participants achieve their aspirations, maintain their independence, and live life with dignity.</p>
              <p>Every person who comes to us receives a genuinely tailored support plan. We celebrate every milestone, no matter how small, because we know each step forward matters.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-purple-100 to-violet-100 rounded-[3rem] blur-2xl opacity-60" />
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000&h=800&fit=crop"
              alt="Community Support"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-5 -start-5 bg-purple-600 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-display font-bold">5+</p>
              <p className="font-semibold text-sm text-purple-200">Years of Experience</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-7 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white dark:bg-card p-10 rounded-3xl card-shadow border border-gray-100 dark:border-border relative overflow-hidden"
          >
            <div className="absolute top-0 end-0 p-8 opacity-[0.04]"><Target size={130} /></div>
            <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center mb-6 shadow-md shadow-purple-600/20">
              <Target className="text-white h-7 w-7" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-purple-700 dark:text-purple-400">Our Mission</h3>
            <p className="text-gray-500 dark:text-muted-foreground leading-relaxed">
              To provide high-quality, compassionate, and personalised support services that empower individuals with disabilities to achieve their goals, enhance their independence, and actively participate in their communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl p-10 shadow-xl hero-gradient"
          >
            <div className="absolute top-0 end-0 p-8 opacity-10"><Eye size={130} /></div>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Eye className="text-white h-7 w-7" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To be the most trusted and respected NDIS provider in Sydney, known for our unwavering commitment to excellence, innovation in care, and the profound positive impact we make in the lives of those we serve.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-5">
            Our Core Values
          </span>
          <h2 className="text-4xl font-display font-bold mb-12 text-gray-900 dark:text-white">
            What <span className="text-purple-700 dark:text-purple-400">Drives Us</span> Every Day
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-center gap-3.5 bg-white dark:bg-card p-5 rounded-2xl border border-gray-100 dark:border-border card-shadow text-left group hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center shrink-0 group-hover:bg-purple-600 transition-colors">
                  <value.icon size={18} className="text-purple-700 dark:text-purple-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-semibold text-gray-800 dark:text-foreground text-sm leading-snug">{value.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
