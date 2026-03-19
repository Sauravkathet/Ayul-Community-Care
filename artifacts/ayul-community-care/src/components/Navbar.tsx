import { Link, useLocation } from "wouter";
import {
  Menu, X, ChevronDown, Users, Heart, Info, Phone, MapPin,
  Shield, Home, Brain, Accessibility, HandHeart, Newspaper,
  FileText, HelpCircle, Building2, Clock, BookOpen,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownMenus = [
  {
    label: "Who We Support",
    items: [
      { icon: Users, title: "People with Disabilities", desc: "Tailored NDIS support for all disability types", href: "/services" },
      { icon: Brain, title: "Psychosocial Support", desc: "Mental health and wellbeing assistance", href: "/services" },
      { icon: Accessibility, title: "Aged Care Recipients", desc: "Compassionate care for older Australians", href: "/services" },
      { icon: HandHeart, title: "Carers & Families", desc: "Support and respite for carers", href: "/services" },
    ],
  },
  {
    label: "Our Services",
    items: [
      { icon: Shield, title: "NDIS Support Services", desc: "Plan management and support coordination", href: "/services" },
      { icon: Heart, title: "Personal Care Assistance", desc: "Daily personal care and hygiene support", href: "/services" },
      { icon: Users, title: "Community Participation", desc: "Social and recreational engagement", href: "/services" },
      { icon: Home, title: "Daily Living Support", desc: "Household tasks and independent living", href: "/services" },
    ],
  },
  {
    label: "Resources",
    items: [
      { icon: Newspaper, title: "News & Updates", desc: "Latest NDIS news and company updates", href: "/about" },
      { icon: FileText, title: "NDIS Information", desc: "Understanding your NDIS plan and rights", href: "/about" },
      { icon: HelpCircle, title: "FAQs", desc: "Answers to common questions", href: "/contact" },
      { icon: BookOpen, title: "Our Blog", desc: "Tips, guides and care advice", href: "/about" },
    ],
  },
  {
    label: "About Us",
    items: [
      { icon: Info, title: "Our Story", desc: "How Ayul Community Care came to be", href: "/about" },
      { icon: Heart, title: "Mission & Values", desc: "What drives everything we do", href: "/about" },
      { icon: Users, title: "Our Team", desc: "Meet our compassionate professionals", href: "/about" },
      { icon: Shield, title: "NDIS Registered", desc: "Fully registered and quality assured", href: "/about" },
    ],
  },
  {
    label: "Locations",
    items: [
      { icon: MapPin, title: "Sydney — Head Office", desc: "Sydney, NSW, Australia", href: "/contact" },
      { icon: Phone, title: "+61 450 602 904", desc: "Mon–Fri 8am–6pm AEST", href: "tel:+61450602904" },
      { icon: Clock, title: "24/7 Emergency Line", desc: "Always here when you need us", href: "/contact" },
      { icon: Building2, title: "admin@ayulcommunitycare.com.au", desc: "General enquiries & referrals", href: "mailto:admin@ayulcommunitycare.com.au" },
    ],
  },
];

const menuVariants = {
  hidden: { opacity: 0, y: -6, clipPath: "inset(0 0 100% 0 round 0px)" },
  visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 0px)", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -6, clipPath: "inset(0 0 100% 0 round 0px)", transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
};

const itemContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.07 } },
  exit: {},
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.28 } },
  exit: { opacity: 0, x: -4, transition: { duration: 0.12 } },
};

function DesktopDropdown({ menu, isOpen, onClose }: { menu: typeof dropdownMenus[0]; isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden" animate="visible" exit="exit" variants={menuVariants}
          className="absolute top-full start-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-[100]"
        >
          <motion.div className="p-2 grid grid-cols-2 gap-1" variants={itemContainerVariants} initial="hidden" animate="visible" exit="exit">
            {menu.items.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-3 px-4 py-3.5 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group"
                >
                  <div className="mt-0.5 p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg group-hover:bg-purple-600 transition-colors shrink-0">
                    <item.icon size={15} className="text-purple-700 dark:text-purple-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">{item.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="bg-purple-50 dark:bg-purple-950/40 border-t border-purple-100 dark:border-purple-900 px-5 py-3 flex items-center justify-between">
            <span className="text-xs text-purple-700 dark:text-purple-400 font-medium">Need help finding the right support?</span>
            <Link href="/contact" onClick={onClose} className="text-xs font-semibold text-white bg-purple-600 px-3 py-1.5 rounded-full hover:bg-purple-700 transition-colors">
              Talk to us
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = ""; setMobileExpanded(null); }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = () => setActiveDropdown(null);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => { timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120); };
  const closeAll = () => { setIsOpen(false); setActiveDropdown(null); };

  return (
    <header
      className={`fixed top-9 w-full z-50 transition-all duration-300 bg-white dark:bg-gray-950 ${
        scrolled ? "shadow-sm py-3" : "py-4"
      } border-b border-gray-100 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" onClick={closeAll}>
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Ayul Community Care Logo"
              className="h-9 w-9 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight leading-tight">
              Ayul<br />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 leading-none">Community Care</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" onClick={(e) => e.stopPropagation()}>
            {dropdownMenus.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeDropdown === menu.label
                      ? "text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-purple-50/70 dark:hover:bg-purple-900/10"
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === menu.label ? "rotate-180 text-purple-600" : "text-gray-400"}`}
                  />
                </button>
                <DesktopDropdown menu={menu} isOpen={activeDropdown === menu.label} onClose={() => setActiveDropdown(null)} />
              </div>
            ))}

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                location === "/contact"
                  ? "text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 hover:bg-purple-50/70"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full shadow-md shadow-purple-600/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[200] text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 top-[72px] bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
              className="absolute top-full start-0 w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-2xl lg:hidden max-h-[calc(100vh-108px)] overflow-y-auto"
            >
              <div className="px-4 py-3 space-y-0.5">
                {dropdownMenus.map((menu, i) => (
                  <motion.div
                    key={menu.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === menu.label ? null : menu.label)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-800 dark:text-gray-100 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      {menu.label}
                      <motion.span animate={{ rotate: mobileExpanded === menu.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={16} className="text-gray-400" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileExpanded === menu.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                          exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                          className="overflow-hidden"
                        >
                          <div className="ps-4 pb-2 space-y-0.5">
                            {menu.items.map((item, j) => (
                              <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.04, duration: 0.25 }}
                              >
                                <Link
                                  href={item.href}
                                  onClick={closeAll}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                                >
                                  <div className="p-1.5 bg-purple-100 dark:bg-purple-900/40 rounded-lg shrink-0">
                                    <item.icon size={14} className="text-purple-700 dark:text-purple-400" />
                                  </div>
                                  <div>
                                    <p className="font-medium leading-tight">{item.title}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item.desc}</p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + dropdownMenus.length * 0.04, duration: 0.3 }}
                >
                  <Link href="/contact" onClick={closeAll} className="block px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-800 dark:text-gray-100 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                    Contact Us
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.3 }}
                  className="pt-3 pb-2"
                >
                  <Link
                    href="/contact"
                    onClick={closeAll}
                    className="block w-full text-center py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md shadow-purple-600/20 transition-colors"
                  >
                    Get Support
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
