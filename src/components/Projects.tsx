import React, { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const myProjects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A clean portfolio built with React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description:
      "An online store featuring product filtration and shopping cart.",
    tags: ["React", "JavaScript", "CSS3"],
    link: "https://github.com",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A productivity tool that helps users organize daily tasks.",
    tags: ["TypeScript", "React", "HTML5"],
    link: "https://github.com",
  },
];

export const Projects: React.FC = () => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const stage1 = setTimeout(() => setLoadingStage(1), 300);
    const stage2 = setTimeout(() => setLoadingStage(2), 600);

    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
    };
  }, []);

  useEffect(() => {
    if (loadingStage === 2) {
      myProjects.forEach((project, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, project.id]);
        }, index * 200);
      });
    }
  }, [loadingStage]);

  return (
    <div className="max-w-5xl mx-auto px-6 text-center select-none w-full">
      {loadingStage < 2 ? (
        <div className="h-40 flex flex-col items-center justify-center font-mono text-sm text-slate-400">
          <div className="bg-slate-800/20 border border-slate-800/60 px-6 py-4 rounded-xl text-left min-w-300px">
            <p className="text-emerald-500/80 mb-1">
              <span className="text-slate-500 mr-2">&gt;</span> npm run
              fetch-projects
            </p>
            {loadingStage >= 0 && (
              <p className="text-slate-300">
                <span className="text-emerald-400 mr-2">✔</span> Fetching GitHub
                repositories...
              </p>
            )}
            {loadingStage >= 1 && (
              <p className="text-slate-300 animate-pulse">
                <span className="text-emerald-400 mr-2">⚙</span> Compiling
                system source files...
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="opacity-0 animate-[premiumBlurIn_0.5s_ease-out_forwards]">
          <h2 className="text-3xl font-bold text-emerald-500 dark:text-emerald-400 mb-8 transition-colors">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {myProjects.map((project) => {
              const isCardVisible = visibleCards.includes(project.id);

              return (
                <div
                  key={project.id}
                  className={`bg-(--color-card-bg) border border-(--color-border-custom) p-6 rounded-xl flex flex-col justify-between text-left 
                    hover:border-emerald-500/30 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_0_30px_rgba(52,211,153,0.08)]
                    transition-all duration-500 ease-out group
                    ${
                      isCardVisible
                        ? "opacity-100 scale-100 filter-none"
                        : "opacity-0 scale-[0.96] blur-sm"
                    }`}
                >
                  <div>
                    <h3 className="text-xl font-bold text-(--color-text-main) group-hover:text-emerald-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-(--color-text-muted) text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono bg-slate-100 dark:bg-slate-900 text-(--color-text-muted) group-hover:text-emerald-500 dark:group-hover:text-emerald-400 border border-(--color-border-custom) px-2.5 py-1 rounded-md transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-medium text-(--color-text-muted) hover:text-(--color-text-main) border-b border-(--color-border-custom) hover:border-(--color-text-main) transition-all duration-300 cursor-pointer"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
