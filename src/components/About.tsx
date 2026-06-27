import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { name: "React", level: "Frontend Core" },
    { name: "TypeScript", level: "Strict Typing" },
    { name: "Tailwind CSS", level: "Modern Styling" },
    { name: "JavaScript", level: "ES6+ Logic" },
    { name: "HTML5 & CSS3", level: "Semantic Structure" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 select-none w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <div
          className="md:col-span-5 bg-(--color-card-bg) border border-(--color-border-custom) p-6 rounded-2xl flex flex-col justify-between
          hover:border-emerald-500/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_0_40px_rgba(52,211,153,0.05)]
          transition-all duration-500 text-left opacity-0 animate-[sciFiReveal_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-lg">
                &lt;/&gt;
              </span>
            </div>

            <h2 className="text-2xl font-bold text-(--color-text-main) mb-2">
              {t.about.title}
            </h2>
            <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-6 transition-colors duration-300">
              {t.about.status}
            </p>

            <p className="text-(--color-text-muted) text-sm leading-relaxed mb-4">
              {t.about.bio1}
            </p>
            <p className="text-(--color-text-muted) text-sm leading-relaxed">
              {t.about.bio2}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-(--color-border-custom) flex items-center justify-between text-xs font-mono text-(--color-text-muted)">
            <span>{t.about.location}</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold animate-pulse transition-colors duration-300">
              {t.about.available}
            </span>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-between gap-4">
          <div className="text-left mb-2 opacity-0 animate-[sciFiReveal_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] delay-100">
            <h3 className="text-xs font-mono text-(--color-text-muted) opacity-80 uppercase tracking-wider mb-1">
              {t.about.stackTitle}
            </h3>
            <p className="text-(--color-text-main) opacity-90 text-sm">
              {t.about.stackDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 grow">
            {skills.map((skill, index) => {
              const delays = [
                "delay-150",
                "delay-200",
                "delay-250",
                "delay-300",
                "delay-350",
              ];

              return (
                <div
                  key={index}
                  className={`bg-(--color-card-bg) border border-(--color-border-custom) p-4 rounded-xl flex flex-col justify-center text-left
                    hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group cursor-default
                    opacity-0 animate-[sciFiReveal_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] ${delays[index] || ""}`}
                >
                  <span className="text-sm font-semibold text-(--color-text-main) group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-(--color-text-muted) opacity-80 mt-0.5">
                    {skill.level}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="bg-(--color-card-bg) border border-(--color-border-custom) p-4 rounded-xl text-left shadow-sm dark:shadow-none opacity-0 animate-[sciFiReveal_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards] delay-400">
            <p className="text-xs text-(--color-text-muted) leading-relaxed">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold mr-1.5 transition-colors duration-300">
                ✓
              </span>
              {t.about.focus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
