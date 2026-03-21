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
  },
  {
    id: "personal-care",
    icon: UserCheck,
    title: "Personal Care Assistance",
    desc: "Dignified and respectful support with daily personal activities tailored to your specific routines and preferences.",
    image: "https://imgs.search.brave.com/_7HJXY6NOjMASwce6W5TaVT6dASyrtvZzOSSbFkJJg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg4/NTQ3MjE0Ny9waG90/by9zZW5pb3ItY2l0/aXplbi1jYXJlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1n/QzRsdGwteFZwc3Jy/ekcwaHVpM3FDMFly/aXJBTm1qdXRuRW9X/ZmgxclFjPQ",
    points: ["Grooming & hygiene", "Dressing support", "Mobility assistance", "Health monitoring"],
  },
  {
    id: "community",
    icon: Users,
    title: "Community Participation",
    desc: "Empowering you to engage in social, recreational, and civic activities that bring joy and meaning to your life.",
    image: "https://imgs.search.brave.com/d3xicWNqLlTUuGrh4mz0UJobAbeNoaua9OfVedY0zWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/NzcwMjM4NS9waG90/by9hZ2VkLWJ1c2lu/ZXNzd29tYW4tdGVh/Y2hlci1vci1idXNp/bmVzcy1jb2FjaC1z/cGVha2luZy10by15/b3VuZy1wZW9wbGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXQtMGJGTmVLOFcy/b1NuSlkzd05FX1BS/UjdSek1rRlVnVFdP/N2NMV3E3bG89",
    points: ["Social outings", "Recreational activities", "Volunteer work", "Skills development"],
  },
  {
    id: "daily-living",
    icon: Activity,
    title: "Daily Living Support",
    desc: "Skill development and assistance to build independence in managing everyday household tasks and routines.",
    image: "https://imgs.search.brave.com/_7HJXY6NOjMASwce6W5TaVT6dASyrtvZzOSSbFkJJg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg4/NTQ3MjE0Ny9waG90/by9zZW5pb3ItY2l0/aXplbi1jYXJlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1n/QzRsdGwteFZwc3Jy/ekcwaHVpM3FDMFly/aXJBTm1qdXRuRW9X/ZmgxclFjPQ",
    points: ["Meal preparation", "Cleaning & tidying", "Shopping assistance", "Life skills coaching"],
  },
  {
    id: "disability",
    icon: HeartPulse,
    title: "Disability Support",
    desc: "Specialised, empathetic care adapted to various disabilities, focusing on your capabilities and unique strengths.",
    image: "https://imgs.search.brave.com/pEfgJvCREzZYeTkTmb2W-n7pDfFD9X6H9DOAfLwkvTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA0/ODIxMTAwL3Bob3Rv/L2Vuam95aW5nLXRo/ZS1jb21wYW55Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/SFpDVVNzZ19HYTFZ/WldIc2tWVERwWjRF/SGxxTWliVm5IeV9r/Zl96czVRPQ",
    points: ["Behaviour support", "Therapy assistance", "Medical coordination", "Capacity building"],
  },
  {
    id: "sil",
    icon: Home,
    title: "Supported Independent Living",
    desc: "24/7 support in a shared or individual home, helping you live as independently and comfortably as possible.",
    image: "https://imgs.search.brave.com/76DdcS1orokMlOqXjKvxWIPwFnpjmJXW4SWdz5p52C0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYXN0/ZXJzZWFsc2FyLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMy9FQVMtUGls/bGFyUGhvdG9fZDA1/YzEzOWE1YTU4MDBk/NDI5MzEyZjBlYjRj/YzI3NTdfMjAwMC0x/LnBuZw",
    points: ["24/7 on-call support", "Safe living environment", "Independence goals", "Personalised routines"],
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
              className="group bg-white dark:bg-card rounded-3xl overflow-hidden flex flex-col card-purple-hover card-shadow"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#8E6BBF]/30 group-hover:bg-[#8E6BBF]/18 transition-opacity z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 start-4 z-20 w-13 h-13 w-12 h-12 rounded-2xl bg-[#8E6BBF] flex items-center justify-center shadow-xl">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-grow flex flex-col">
                <h3 className="text-xl font-display font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-500 dark:text-muted-foreground text-sm leading-relaxed flex-grow mb-5">{service.desc}</p>

                <div className="grid grid-cols-2 gap-1.5 mb-6">
                  {service.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-muted-foreground">
                      <CheckCircle2 size={13} className="text-[#8E6BBF] shrink-0" />
                      {pt}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8E6BBF] hover:text-[#7d5cad] dark:text-[#E6DDF5] hover:gap-2.5 transition-all duration-200"
                >
                  Enquire about this service <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA — BLACK */}
      <div className="py-24 relative overflow-hidden" style={{ backgroundColor: "#E8DED1" }}>
        <div className="absolute top-0 end-0 w-80 h-80 rounded-full blur-[80px] pointer-events-none" style={{ backgroundColor: "rgba(230, 221, 245, 0.65)" }} />
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-[#8E6BBF] text-sm font-semibold mb-5 border" style={{ backgroundColor: "#E6DDF5", borderColor: "#d8c8f0" }}>
            Get Started Today
          </span>
          <h2 className="text-4xl font-display font-bold text-[#2F2F2F] mb-4">Not sure which service is right for you?</h2>
          <p className="text-[#4a4a4a] mb-10 leading-relaxed">Our friendly team will guide you through your options and help you get the most from your NDIS plan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#8E6BBF] hover:bg-[#7d5cad] text-white font-semibold rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Talk to Our Team <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 border text-[#2F2F2F] hover:border-[#8E6BBF] font-semibold rounded-full transition-all duration-300"
              style={{ backgroundColor: "#A8C3A0", borderColor: "#A8C3A0" }}
            >
              Make a Referral
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  );
}
