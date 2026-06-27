import React, { useState } from "react";

interface TranslationStructure {
  navbar: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    [key: string]: string;
  };
}

interface MobileMenuProps {
  currentPage: string;
  handlePageChange: (page: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  toggleLanguage: () => void;
  language: string;
  t: TranslationStructure;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  currentPage,
  handlePageChange,
  isDarkMode,
  setIsDarkMode,
  toggleLanguage,
  language,
  t,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onPageClick = (page: string) => {
    handlePageChange(page);
    setIsOpen(false);
  };

  return (
    <>
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

      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-zinc-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col items-center gap-4 font-medium">
          {["home", "about", "projects", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => onPageClick(page)}
              className={`w-full text-center py-2 ${currentPage === page ? "text-emerald-500" : "text-slate-600 dark:text-slate-300"}`}
            >
              {t.navbar[page]}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
