import { Phone, Search, Globe, ChevronDown, Sun, Moon, Accessibility } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

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
  const { isDark, toggleDark } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const changeLanguage = (code: string) => { i18n.changeLanguage(code); setLangOpen(false); };

  return (
    <div
      className="fixed top-0 w-full z-[60] text-xs transition-colors duration-300 border-b"
      style={{ backgroundColor: "#8E6BBF", borderColor: "#cdbbe8", color: "#F7F5F2" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center gap-3">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <a
            href="tel:1800233673"
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-semibold tracking-wide text-[#2F2F2F] transition-colors shrink-0"
            style={{ backgroundColor: "#A8C3A0", borderColor: "#bfd3ba" }}
          >
            <Phone size={12} className="text-[#2F2F2F] rtl-flip" />
            1800 233 673
          </a>

          {["Business Services", "Careers", "Media"].map((label) => (
            <a
              key={label}
              href="#"
              className="hidden md:block px-2.5 py-1 rounded-full text-[#F7F5F2]/85 hover:text-white transition-colors font-medium whitespace-nowrap"
              style={{ "--hover-bg": "#a17dcb" } as React.CSSProperties}
            >
              {label}
            </a>
          ))}
        </div>

        <form
          className="hidden md:flex items-center flex-1 max-w-sm rounded-full px-3 py-1.5"
          style={{ backgroundColor: "rgba(247, 245, 242, 0.16)", border: "1px solid rgba(247, 245, 242, 0.22)" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <Search size={13} className="text-[#F7F5F2] shrink-0" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search support, services, resources"
            className="ms-2 w-full bg-transparent outline-none text-white text-xs"
            style={{ color: "#F7F5F2" }}
          />
        </form>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-full text-white/85 hover:text-white transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark
              ? <Sun size={14} className="text-amber-300" />
              : <Moon size={14} />
            }
          </button>

          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-white/85 hover:text-white transition-colors font-medium"
              aria-label="Change language"
            >
              <Globe size={13} className="text-[#F7F5F2]" />
              <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
              <ChevronDown size={11} className={`text-white/70 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div className="absolute end-0 top-full mt-2 w-44 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-[#E8DED1] dark:border-gray-700 overflow-hidden z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors ${
                      i18n.language === lang.code
                        ? "bg-[#E6DDF5] dark:bg-[#4b3c66] text-[#8E6BBF] dark:text-[#E6DDF5] font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-[#F7F5F2] dark:hover:bg-gray-800"
                    }`}
                    dir={lang.code === "ar" ? "rtl" : "ltr"}
                  >
                    <span className="text-base leading-none shrink-0">{lang.flag}</span>
                    <span className="flex-1">{lang.name}</span>
                    {i18n.language === lang.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8E6BBF] dark:bg-[#E6DDF5] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition-colors ms-1"
            style={{ backgroundColor: "#E6DDF5", color: "#2F2F2F" }}
            aria-label="Accessibility options"
          >
            <Accessibility size={13} className="text-[#8E6BBF]" />
            Accessibility
          </button>
        </div>
      </div>
    </div>
  );
}
