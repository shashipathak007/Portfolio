import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Theme Initializer
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light-theme");
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
        ? "nav-blur border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
        : "bg-transparent border-white/10"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="relative group">
          <span className="text-xl font-bold tracking-tight text-white">
            <span className="gradient-text">Shashi Shekhar Pathak</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-accent-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-accent-400 to-violet-400 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </a>
          ))}
          <a
            href="/CV.pdf"
            download="Shashi_Shekhar_Pathak_CV.pdf"
            className="ml-4 px-5 py-2 text-sm font-semibold rounded-full gradient-border text-accent-400 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Download CV
          </a>
          <button
            onClick={() => {
              const root = document.documentElement;
              if (root.classList.contains("light-theme")) {
                root.classList.remove("light-theme");
                localStorage.setItem("theme", "dark");
              } else {
                root.classList.add("light-theme");
                localStorage.setItem("theme", "light");
              }
            }}
            className="ml-3 p-2 rounded-full text-slate-400 hover:text-accent-400 border border-slate-600/30 hover:border-accent-400/50 transition-all theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            <span className="theme-icon-sun">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
            </span>
            <span className="theme-icon-moon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
            </span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => {
              const root = document.documentElement;
              if (root.classList.contains("light-theme")) {
                root.classList.remove("light-theme");
                localStorage.setItem("theme", "dark");
              } else {
                root.classList.add("light-theme");
                localStorage.setItem("theme", "light");
              }
            }}
            className="p-1.5 rounded-full text-slate-400 hover:text-accent-400 border border-slate-600/30 transition-all theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            <span className="theme-icon-sun">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
            </span>
            <span className="theme-icon-moon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
            </span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden nav-blur border-t border-white/6 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 px-4 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/4 rounded-lg transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/CV.pdf"
                download="Shashi_Shekhar_Pathak_CV.pdf"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 mx-4 py-3 text-center text-sm font-bold text-dark-950 bg-linear-to-r from-accent-400 to-violet-400 rounded-lg transition-all"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
