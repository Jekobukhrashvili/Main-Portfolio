import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  isDarkMode,
  setIsDarkMode,
}) => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-100 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-900/50 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          onClick={() => setCurrentPage("home")}
          className="text-lg font-mono font-bold text-slate-900 dark:text-emerald-400 cursor-pointer"
        >
          ⚖️<span className="text-emerald-500" ></span>
        </div>

        <div className="flex items-center gap-5 text-11 font-medium">
          <button
            onClick={() => setCurrentPage("home")}
            className={`min-w-23 text-center cursor-pointer transition-colors ${currentPage === "home" ? "text-emerald-500" : "text-slate-600 dark:text-slate-300 hover:text-emerald-500"}`}
          >
            {t.navbar.home}
          </button>
          <button
            onClick={() => setCurrentPage("about")}
            className={`min-w-23 text-center cursor-pointer transition-colors ${currentPage === "about" ? "text-emerald-500" : "text-slate-600 dark:text-slate-300 hover:text-emerald-500"}`}
          >
            {t.navbar.about}
          </button>
          <button
            onClick={() => setCurrentPage("projects")}
            className={`min-w-23 text-center cursor-pointer transition-colors ${currentPage === "projects" ? "text-emerald-500" : "text-slate-600 dark:text-slate-300 hover:text-emerald-500"}`}
          >
            {t.navbar.projects}
          </button>
          <button
            onClick={() => setCurrentPage("contact")}
            className={`min-w-23 text-center cursor-pointer transition-colors ${currentPage === "contact" ? "text-emerald-500" : "text-slate-600 dark:text-slate-300 hover:text-emerald-500"}`}
          >
            {t.navbar.contact}
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-20 ml-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500/40 transition-all cursor-pointer text-sm font-mono"
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={toggleLanguage}
            className="w-15 h-9 py-1 text-center border rounded-xl border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 transition-colors cursor-pointer text-xs font-mono"
          >
            {language === "en" ? "GE" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};
