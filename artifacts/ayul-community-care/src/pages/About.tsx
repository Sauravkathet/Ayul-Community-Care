import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye } from "lucide-react";

export default function About() {
  const values = [
    "Compassion in everything we do",
    "Respect for individual choices",
    "Excellence in service delivery",
    "Integrity and transparency",
    "Empowerment for independence",
    "Community inclusion"
  ];

  return (
    <PageTransition>
      {/* Header */}
      <div className="bg-primary/5 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">About Ayul Community Care</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A trusted NDIS provider dedicated to making a meaningful difference in the lives of individuals with disabilities across Sydney.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Founded in 2020, Ayul Community Care was born from a deep-rooted passion to support and uplift individuals with disabilities. We recognized a need for care that goes beyond basic assistance—care that is truly person-centered, empathetic, and empowering.
              </p>
              <p>
                As a registered NDIS provider based in Sydney, we have grown into a community of dedicated professionals who share a common goal: to help our participants achieve their aspirations, maintain their independence, and live life with dignity.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* about us community support gathering */}
            <img 
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000&h=800&fit=crop" 
              alt="Community Support" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-display font-bold">5+</p>
              <p className="font-medium text-sm opacity-90">Years of Experience</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-10 rounded-3xl soft-shadow border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target size={120} />
            </div>
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide high-quality, compassionate, and personalized support services that empower individuals with disabilities to achieve their goals, enhance their independence, and actively participate in their communities.
            </p>
          </div>

          <div className="bg-primary p-10 rounded-3xl soft-shadow relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye size={120} />
            </div>
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-accent h-8 w-8" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To be the most trusted and respected NDIS provider in Sydney, known for our unwavering commitment to excellence, innovation in care, and the profound positive impact we make in the lives of those we serve.
            </p>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10 text-foreground">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-background p-4 rounded-xl border border-border/50 text-left"
              >
                <CheckCircle2 className="text-secondary shrink-0" size={24} />
                <span className="font-medium text-foreground">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
