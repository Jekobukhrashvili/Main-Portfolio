import React, { createContext, useState, useContext } from "react";
import { translations } from "../constants/translation";

type Language = "en" | "ge";

interface LanguageContextType {
  language: Language;
  t: Record<string, any>;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ge" : "en"));
  };

  const t = translations[language as Language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguageInternal = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

export { useLanguageInternal as useLanguage };
