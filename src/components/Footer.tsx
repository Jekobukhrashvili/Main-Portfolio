import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-(--color-card-bg) border-t border-(--color-border) py-6 text-(--color-text-muted) text-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <p className="text-(--color-text-main) opacity-80">
            © {new Date().getFullYear()} Jeko. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 font-mono text-xs">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
