import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-100 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-900/50 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div
          onClick={() => setCurrentPage("home")}
          className="text-lg font-mono font-bold text-slate-900 dark:text-emerald-400 cursor-pointer"
        >
          ⚖️<span className="text-emerald-500"></span>
        </div>

        <div className="hidden md:flex items-center gap-5 text-11 font-medium">
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
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={toggleLanguage}
            className="w-10 h-8 border rounded-xl border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono"
          >
            {language === "en" ? "GE" : "EN"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-zinc-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-4 font-medium">
          <button
            onClick={() => handlePageChange("home")}
            className={`w-full text-center py-2 ${currentPage === "home" ? "text-emerald-500" : "text-slate-600 dark:text-slate-300"}`}
          >
            {t.navbar.home}
          </button>
          <button
            onClick={() => handlePageChange("about")}
            className={`w-full text-center py-2 ${currentPage === "about" ? "text-emerald-500" : "text-slate-600 dark:text-slate-300"}`}
          >
            {t.navbar.about}
          </button>
          <button
            onClick={() => handlePageChange("projects")}
            className={`w-full text-center py-2 ${currentPage === "projects" ? "text-emerald-500" : "text-slate-600 dark:text-slate-300"}`}
          >
            {t.navbar.projects}
          </button>
          <button
            onClick={() => handlePageChange("contact")}
            className={`w-full text-center py-2 ${currentPage === "contact" ? "text-emerald-500" : "text-slate-600 dark:text-slate-300"}`}
          >
            {t.navbar.contact}
          </button>
        </div>
      </div>
    </nav>
  );
};
