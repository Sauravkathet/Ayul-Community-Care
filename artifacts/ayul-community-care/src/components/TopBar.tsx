import { Phone, Search, Globe, ChevronDown, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇦🇺" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export function TopBar() {
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="fixed top-0 w-full z-[60] bg-teal-800 text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">

        {/* Left — phone */}
        <a
          href="tel:1800233673"
          className="flex items-center gap-1.5 font-semibold tracking-wide hover:text-teal-200 transition-colors shrink-0"
        >
          <Phone size={12} className="text-teal-300" />
          1800 233 673
        </a>

        {/* Right — links + search + lang */}
        <div className="flex items-center gap-1">

          {/* Quick links */}
          {["Business Services", "Careers", "Media"].map((label) => (
            <a
              key={label}
              href="#"
              className="hidden sm:block px-2.5 py-1 rounded hover:bg-white/10 text-teal-100 hover:text-white transition-colors font-medium"
            >
              {label}
            </a>
          ))}

          <div className="w-px h-4 bg-white/20 mx-1 hidden sm:block" />

          {/* Search */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="flex items-center bg-white/15 rounded-full px-3 py-0.5 gap-1.5">
                <Search size={12} className="text-teal-200 shrink-0" />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search…"
                  className="bg-transparent outline-none text-white placeholder-teal-300 w-32 text-xs"
                  onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }}>
                  <X size={11} className="text-teal-300 hover:text-white" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-1.5 rounded hover:bg-white/10 text-teal-200 hover:text-white transition-colors"
                aria-label="Open search"
              >
                <Search size={14} />
              </button>
            )}
          </div>

          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 text-teal-100 hover:text-white transition-colors font-medium"
              aria-label="Change language"
            >
              <Globe size={13} className="text-teal-300" />
              <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
              <span className="sm:hidden"><Globe size={13} /></span>
              <ChevronDown size={11} className={`text-teal-300 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors ${
                      i18n.language === lang.code
                        ? "bg-teal-50 text-teal-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {i18n.language === lang.code && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-600" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
