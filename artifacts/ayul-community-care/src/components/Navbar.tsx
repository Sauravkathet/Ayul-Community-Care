import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Users, Heart, BookOpen, Info, Phone, MapPin, Shield, Home, Brain, Accessibility, HandHeart, Newspaper, FileText, HelpCircle, Building2, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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
      {
        icon: MapPin,
        title: "Sydney — Head Office",
        desc: "Sydney, NSW, Australia",
        href: "/contact",
        detail: true,
      },
      {
        icon: Phone,
        title: "+61 450 602 904",
        desc: "Mon–Fri 8am–6pm AEST",
        href: "tel:+61450602904",
        detail: true,
      },
      {
        icon: Clock,
        title: "24/7 Emergency Line",
        desc: "Always here when you need us",
        href: "/contact",
        detail: true,
      },
      {
        icon: Building2,
        title: "admin@ayulcommunitycare.com.au",
        desc: "General enquiries & referrals",
        href: "mailto:admin@ayulcommunitycare.com.au",
        detail: true,
      },
    ],
  },
];

function DropdownMenu({ menu, isOpen, onClose }: { menu: typeof dropdownMenus[0]; isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      style={{ zIndex: 100 }}
    >
      <div className="p-2 grid grid-cols-2 gap-1">
        {menu.items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={onClose}
            className="flex items-start gap-3 px-4 py-3.5 rounded-xl hover:bg-teal-50 transition-colors group"
          >
            <div className="mt-0.5 p-2 bg-teal-100 rounded-lg group-hover:bg-teal-600 transition-colors shrink-0">
              <item.icon size={16} className="text-teal-700 group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-tight truncate">{item.title}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-teal-50 border-t border-teal-100 px-5 py-3 flex items-center justify-between">
        <span className="text-xs text-teal-700 font-medium">Need help finding the right support?</span>
        <Link
          href="/contact"
          onClick={onClose}
          className="text-xs font-semibold text-white bg-teal-700 px-3 py-1.5 rounded-full hover:bg-teal-800 transition-colors"
        >
          Talk to us
        </Link>
      </div>
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header
      className={`fixed top-9 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Ayul Community Care Logo"
              className="h-9 w-9 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-lg text-teal-800 tracking-tight leading-tight">
              Ayul<br />
              <span className="text-sm font-semibold text-teal-600 leading-none">Community Care</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
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
                      ? "text-teal-700 bg-teal-50"
                      : "text-gray-600 hover:text-teal-700 hover:bg-teal-50/60"
                  }`}
                >
                  {menu.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === menu.label ? "rotate-180 text-teal-600" : "text-gray-400"}`}
                  />
                </button>

                <DropdownMenu
                  menu={menu}
                  isOpen={activeDropdown === menu.label}
                  onClose={() => setActiveDropdown(null)}
                />
              </div>
            ))}

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                location === "/contact" ? "text-teal-700 bg-teal-50" : "text-gray-600 hover:text-teal-700 hover:bg-teal-50/60"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-teal-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-teal-700/20 hover:bg-teal-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-teal-700 p-2 rounded-lg hover:bg-teal-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 space-y-1">
              {dropdownMenus.map((menu) => (
                <div key={menu.label}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === menu.label ? null : menu.label)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-teal-50 transition-colors"
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform text-gray-400 ${activeDropdown === menu.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === menu.label && (
                    <div className="pl-4 pb-2 space-y-0.5">
                      {menu.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                        >
                          <item.icon size={15} className="text-teal-600 shrink-0" />
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:bg-teal-50 transition-colors"
              >
                Contact Us
              </Link>
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3.5 bg-teal-700 text-white font-semibold rounded-xl"
                >
                  Get Support
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
