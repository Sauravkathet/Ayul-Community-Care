import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Users, Clock, ArrowRight, Star } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    { icon: <ShieldCheck className="h-8 w-8 text-secondary" />, title: "NDIS Registered", desc: "Fully accredited provider ensuring the highest standards of care and compliance." },
    { icon: <Users className="h-8 w-8 text-secondary" />, title: "Experienced Team", desc: "Compassionate professionals dedicated to supporting your unique journey." },
    { icon: <HeartHandshake className="h-8 w-8 text-secondary" />, title: "Person-Centered", desc: "Your goals and preferences are at the heart of everything we do." },
    { icon: <Clock className="h-8 w-8 text-secondary" />, title: "24/7 Support", desc: "Round-the-clock care ensuring you always have the assistance you need." },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-primary font-semibold mb-6">
                <HeartHandshake size={18} className="text-secondary" />
                <span>Sydney's Trusted NDIS Provider</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-foreground leading-[1.1] mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/services"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {t('hero.getStarted')}
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-primary border-2 border-primary/10 font-semibold rounded-full hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                >
                  {t('hero.contactUs')}
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-[3rem] blur-2xl" />
              {/* home hero compassionate caregiver holding patient hand */}
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&h=900&fit=crop" 
                alt="Compassionate Care" 
                className="relative rounded-[2rem] shadow-2xl object-cover h-[600px] w-full border-8 border-white"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 max-w-[250px] animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Star className="text-secondary fill-secondary h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Highest Quality</p>
                  <p className="text-sm text-muted-foreground">Care Standards</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Why Choose Ayul</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Dedicated to Your Independence</h3>
            <p className="text-muted-foreground text-lg">We believe in empowering you to live life on your terms. Our dedicated team is here to provide the support you need.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-8 rounded-3xl soft-shadow hover-soft-shadow border border-border/50"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        {/* Abstract background overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/80 mb-10">Contact our friendly team today to discuss how we can support your unique goals and aspirations.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-accent text-primary font-bold rounded-full shadow-lg hover:bg-white transition-colors duration-300 flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
