// import React, { useState, useEffect } from "react";
// import { useLanguage } from "../context/LanguageContext";

// export const Hero: React.FC = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const { t, language } = useLanguage();

//   useEffect(() => {
//     const words = [t.hero.role1, t.hero.role2, t.hero.role3];
//     const fullWord = words[currentWordIndex];
//     if (!fullWord) return; // 👈 ეს ჩაამატე, რომ კოდი არ გაიტეხოს თუ სიტყვა ჯერ არ მოვიდა
//     const typingSpeed = isDeleting ? 40 : 80;

//     const handleType = () => {
//       if (!isDeleting) {
//         setCurrentText(fullWord.substring(0, currentText.length + 1));

//         if (currentText === fullWord) {
//           setTimeout(() => setIsDeleting(true), 1500);
//         }
//       } else {
//         setCurrentText(fullWord.substring(0, currentText.length - 1));

//         if (currentText === "") {
//           setIsDeleting(false);
//           setCurrentWordIndex((prev) => (prev + 1) % words.length);
//         }
//       }
//     };

//     const timer = setTimeout(handleType, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [currentText, isDeleting, currentWordIndex, t]);

//   return (
//     <div
//       key={language}
//       className=" text-center px-4 max-w-2xl mx-auto select-none "
//     >
//       <h1 className=" text-5xl md:text-6xl font-extrabold text-(--text-main) mb-4 opacity-0 animate-[premiumBlurIn_0.7s_ease-out_forwards]">
//         {t.hero.title}{" "}
//         <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-colors duration-300">
//           Jeko
//         </span>
//       </h1>

//       <div className="h-12 flex items-center justify-center opacity-0 animate-[premiumBlurIn_0.7s_ease-out_forwards] delay-200 mb-8">
//         <p className="text-lg md:text-xl font-mono text-(--text-muted) bg-(--color-card-bg) border border-(--color-border-custom) px-4 py-1.5 rounded-xl transition-all duration-300 shadow-sm dark:shadow-none">
//           <span className="text-emerald-500/80 mr-2">$</span>
//           <span className="text-(--text-main)">{currentText}</span>
//           <span className="inline-block w-0.5 h-5 bg-emerald-500 dark:bg-emerald-400 ml-1 animate-[pulse_0.8s_infinite]">
//             |
//           </span>
//         </p>
//       </div>

//       <div className="opacity-0 animate-[premiumBlurIn_0.7s_ease-out_forwards] delay-400">
//         <button className="bg-(--color-card-bg) text-(--text-main) border border-(--color-border-custom) hover:border-emerald-500/40 font-medium px-6 py-2.5 rounded-lg text-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-sm hover:shadow-md">
//           {t.hero.button}
//         </button>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const words = [
  "React & TypeScript Developer",
  "Problem Solver",
  "Clean Code Enthusiast",
];

export const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const fullWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));

        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div className="text-center px-4 max-w-2xl mx-auto select-none">
      <h1 className="text-5xl md:text-6xl font-extrabold text-(--text-main) mb-4 opacity-0 animate-[premiumBlurIn_0.7s_ease-out_forwards]">
        {t.hero.title || t.hero.title}{" "}
        <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-colors duration-300">
          {t.hero.name}
        </span>
      </h1>

      <div className="h-12 flex items-center justify-center opacity-0 animate-[premiumBlurIn_0.7s_ease-out_forwards] delay-200 mb-8 mt-6">
        <p className="text-lg md:text-xl font-mono text-(--text-muted) bg-(--color-card-bg) border border-(--color-border-custom) px-4 py-1.5 rounded-xl transition-all duration-300 shadow-sm dark:shadow-none">
          <span className="text-emerald-500/80 mr-2">$</span>
          <span className="text-(--text-main)">{currentText}</span>
          <span className="inline-block w-0.5 h-5 bg-emerald-500 dark:bg-emerald-400 ml-1 animate-[pulse_0.8s_infinite]"></span>
        </p>
      </div>

      <div className="opacity-0 animate-[premiumBlurIn_0.7s_ease-out_forwards] delay-400">
        <button className="bg-(--color-card-bg) text-(--text-main) border border-(--color-border-custom) hover:border-emerald-500/40 font-medium px-6 py-2.5 rounded-lg text-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-sm hover:shadow-md">
          {t.hero.button}
        </button>
      </div>
    </div>
  );
};
