import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-zinc-300 dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex flex-col justify-between transition-colors duration-300">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <main className="grow flex items-center justify-center py-20">
        {currentPage === "home" && <Hero />}
        {currentPage === "about" && <About />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "contact" && <Contact />}
      </main>

      <footer className="py-6 text-center text-xs font-mono text-slate-800 dark:text-slate-100 border-t border-slate-200/50 dark:border-slate-900/60 transition-colors duration-300">
        © {new Date().getFullYear()} Jeko. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
