import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const dropdownMenus = [
  {
    label: "Who We Support",
    items: [
      { title: "People with Disabilities", desc: "Tailored NDIS support for all disability types", href: "/services" },
      { title: "Psychosocial Support", desc: "Mental health and wellbeing assistance", href: "/services" },
      { title: "Aged Care Recipients", desc: "Compassionate care for older Australians", href: "/services" },
      { title: "Carers & Families", desc: "Support and respite for carers", href: "/services" },
    ],
  },
  {
    label: "Our Services",
    items: [
      { title: "NDIS Support Services", desc: "Plan management and support coordination", href: "/services" },
      { title: "Personal Care Assistance", desc: "Daily personal care and hygiene support", href: "/services" },
      { title: "Community Participation", desc: "Social and recreational engagement", href: "/services" },
      { title: "Daily Living Support", desc: "Household tasks and independent living", href: "/services" },
    ],
  },
  {
    label: "Resources",
    items: [
      { title: "News & Updates", desc: "Latest NDIS news and company updates", href: "/about" },
      { title: "NDIS Information", desc: "Understanding your NDIS plan and rights", href: "/about" },
      { title: "FAQs", desc: "Answers to common questions", href: "/#faqs" },
      { title: "Our Blog", desc: "Tips, guides and care advice", href: "/about" },
    ],
  },
  {
    label: "About Us",
    items: [
      { title: "Our Story", desc: "How Ayul Community Care came to be", href: "/about" },
      { title: "Mission & Values", desc: "What drives everything we do", href: "/about" },
      { title: "Our Team", desc: "Meet our compassionate professionals", href: "/about" },
      { title: "NDIS Registered", desc: "Fully registered and quality assured", href: "/about" },
    ],
  },
  {
    label: "Locations",
    items: [
      { title: "Sydney — Head Office", desc: "Sydney, NSW, Australia", href: "/contact" },
      { title: "+61 450 602 904", desc: "Mon–Fri 8am–6pm AEST", href: "tel:+61450602904" },
      { title: "24/7 Emergency Line", desc: "Always here when you need us", href: "/contact" },
      { title: "admin@ayulcommunitycare.com.au", desc: "General enquiries and referrals", href: "mailto:admin@ayulcommunitycare.com.au" },
    ],
  },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -6, clipPath: "inset(0 0 100% 0 round 0px)" },
  visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0 round 0px)", transition: { duration: 0.3, ease: smoothEase } },
  exit: { opacity: 0, y: -6, clipPath: "inset(0 0 100% 0 round 0px)", transition: { duration: 0.22, ease: smoothEase } },
};

const itemContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.07 } },
  exit: {},
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { ease: smoothEase, duration: 0.28 } },
  exit: { opacity: 0, x: -4, transition: { duration: 0.12 } },
};

function DesktopDropdown({ menu, isOpen, onClose }: { menu: typeof dropdownMenus[0]; isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden" animate="visible" exit="exit" variants={menuVariants}
          className="absolute top-full start-1/2 -translate-x-1/2 mt-2 w-[290px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden z-[100]"
        >
          <motion.div className="p-2 flex flex-col gap-1" variants={itemContainerVariants} initial="hidden" animate="visible" exit="exit">
            {menu.items.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-3.5 py-3 rounded-xl hover:bg-[#F7F5F2] dark:hover:bg-[#4b3c66]/30 transition-colors group"
                >
                  <p className="text-[13px] font-semibold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-[#8E6BBF] dark:group-hover:text-[#E6DDF5] transition-colors">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="bg-[#F7F5F2] dark:bg-[#3c324f] px-4 py-3 flex items-center justify-between gap-3">
            <span className="text-[11px] text-[#2F2F2F] dark:text-[#F7F5F2] font-medium">Need help finding the right support?</span>
            <Link href="/contact" onClick={onClose} className="text-[11px] font-semibold text-white bg-[#8E6BBF] px-3 py-1.5 rounded-full hover:bg-[#7d5cad] transition-colors whitespace-nowrap">
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
      className={`fixed top-11 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm ${
        scrolled ? "shadow-sm py-3" : "py-4"
      } border-b border-[#E8DED1] dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" onClick={closeAll}>
            <img
              src={`${import.meta.env.BASE_URL}ayullogo.png`}
              alt="Ayul Community Care Logo"
              className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight leading-tight">
              Ayul<br />
              <span className="text-sm font-semibold text-[#8E6BBF] dark:text-[#E6DDF5] leading-none">Community Care</span>
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
                      ? "text-[#8E6BBF] dark:text-[#E6DDF5] bg-[#E6DDF5] dark:bg-[#4b3c66]/40"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#8E6BBF] dark:hover:text-[#E6DDF5] hover:bg-[#F7F5F2] dark:hover:bg-[#4b3c66]/20"
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === menu.label ? "rotate-180 text-[#8E6BBF]" : "text-gray-400"}`}
                  />
                </button>
                <DesktopDropdown menu={menu} isOpen={activeDropdown === menu.label} onClose={() => setActiveDropdown(null)} />
              </div>
            ))}

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                location === "/contact"
                  ? "text-[#8E6BBF] dark:text-[#E6DDF5] bg-[#E6DDF5] dark:bg-[#4b3c66]/40"
                  : "text-gray-700 dark:text-gray-300 hover:text-[#8E6BBF] dark:hover:text-[#E6DDF5] hover:bg-[#F7F5F2]"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#8E6BBF] hover:bg-[#7d5cad] text-white text-sm font-semibold rounded-full shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[200] text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-[#F7F5F2] dark:hover:bg-[#4b3c66]/20 transition-colors"
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
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-800 dark:text-gray-100 hover:bg-[#F7F5F2] dark:hover:bg-[#4b3c66]/20 transition-colors"
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
                                  className="block px-4 py-3 rounded-xl text-sm text-gray-600 dark:text-gray-300 hover:bg-[#F7F5F2] dark:hover:bg-[#4b3c66]/20 hover:text-[#8E6BBF] dark:hover:text-[#E6DDF5] transition-colors"
                                >
                                  <p className="font-medium leading-tight text-[13px]">{item.title}</p>
                                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
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
                  <Link href="/contact" onClick={closeAll} className="block px-4 py-3.5 rounded-xl text-sm font-semibold text-gray-800 dark:text-gray-100 hover:bg-[#F7F5F2] dark:hover:bg-[#4b3c66]/20 transition-colors">
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
                    className="block w-full text-center py-3.5 bg-[#8E6BBF] hover:bg-[#7d5cad] text-white font-semibold rounded-xl shadow-md transition-colors"
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
