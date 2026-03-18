import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Activity, Home, Users, HeartPulse, UserCheck, ShieldHalf } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "ndis-support",
      icon: <ShieldHalf className="h-10 w-10 text-primary" />,
      title: "NDIS Support Services",
      desc: "Comprehensive navigation and implementation of your NDIS plan to maximize your funded supports.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=500&fit=crop"
    },
    {
      id: "personal-care",
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Personal Care Assistance",
      desc: "Dignified and respectful support with daily personal activities tailored to your specific routines.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop"
    },
    {
      id: "community",
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Participation",
      desc: "Empowering you to engage in social, recreational, and civic activities within your local community.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=500&fit=crop"
    },
    {
      id: "daily-living",
      icon: <Activity className="h-10 w-10 text-primary" />,
      title: "Daily Living Support",
      desc: "Skill development and assistance to build your independence in managing daily household tasks.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?w=800&h=500&fit=crop"
    },
    {
      id: "disability",
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      title: "Disability Support",
      desc: "Specialized, empathetic care adapted to various disabilities, focusing on capabilities and strengths.",
      image: "https://images.unsplash.com/photo-1633525164213-90924436531d?w=800&h=500&fit=crop"
    },
    {
      id: "sil",
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Supported Independent Living",
      desc: "24/7 support in a shared or individual home environment, helping you live as independently as possible.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop"
    }
  ];

  return (
    <PageTransition>
      <div className="bg-primary/5 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, person-centered support designed to help you achieve your goals and live your best life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden soft-shadow hover-soft-shadow border border-border/50 flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                {/* service placeholder images */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center -mt-16 mb-4 relative z-20 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground flex-grow mb-6">{service.desc}</p>
                <Link 
                  href="/contact"
                  className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-1"
                >
                  Inquire about this service
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
