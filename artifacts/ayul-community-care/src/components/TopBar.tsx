import { Phone, Search, Globe, ChevronDown, X, Sun, Moon } from "lucide-react";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  useEffect(() => { if (searchOpen) searchRef.current?.focus(); }, [searchOpen]);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const changeLanguage = (code: string) => { i18n.changeLanguage(code); setLangOpen(false); };

  return (
    <div className="fixed top-0 w-full z-[60] text-xs transition-colors duration-300" style={{ backgroundColor: "#0F172A", color: "#94a3b8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">

        {/* Left — phone */}
        <a
          href="tel:1800233673"
          className="flex items-center gap-1.5 font-semibold tracking-wide hover:text-purple-400 transition-colors shrink-0"
        >
          <Phone size={12} className="text-purple-400 rtl-flip" />
          1800 233 673
        </a>

        {/* Right */}
        <div className="flex items-center gap-0.5">

          {["Business Services", "Careers", "Media"].map((label) => (
            <a
              key={label}
              href="#"
              className="hidden sm:block px-2.5 py-1 rounded hover:bg-white/8 text-slate-400 hover:text-white transition-colors font-medium whitespace-nowrap"
            >
              {label}
            </a>
          ))}

          <div className="w-px h-4 bg-white/10 mx-1.5 hidden sm:block" />

          {/* Search */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="flex items-center bg-white/10 rounded-full px-3 py-0.5 gap-1.5">
                <Search size={12} className="text-purple-400 shrink-0" />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search…"
                  className="bg-transparent outline-none text-white placeholder-slate-500 w-28 text-xs"
                  onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }}>
                  <X size={11} className="text-slate-500 hover:text-white" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-1.5 rounded hover:bg-white/8 text-slate-400 hover:text-white transition-colors"
                aria-label="Open search"
              >
                <Search size={14} />
              </button>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className="p-1.5 rounded hover:bg-white/8 text-slate-400 hover:text-white transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark
              ? <Sun size={14} className="text-yellow-400" />
              : <Moon size={14} />
            }
          </button>

          <div className="w-px h-4 bg-white/10 mx-1 hidden sm:block" />

          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/8 text-slate-400 hover:text-white transition-colors font-medium"
              aria-label="Change language"
            >
              <Globe size={13} className="text-purple-400" />
              <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
              <ChevronDown size={11} className={`text-slate-500 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>

            {langOpen && (
              <div className="absolute end-0 top-full mt-1 w-44 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors ${
                      i18n.language === lang.code
                        ? "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    dir={lang.code === "ar" ? "rtl" : "ltr"}
                  >
                    <span className="text-base leading-none shrink-0">{lang.flag}</span>
                    <span className="flex-1">{lang.name}</span>
                    {i18n.language === lang.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0" />
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
