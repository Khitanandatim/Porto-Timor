import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { navLinks, profile } from "../data/content";

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => document.getElementById(l.href.slice(1)));
      let current = "home";
      for (const section of sections) {
        if (!section) continue;
        const top = section.offsetTop - 160;
        if (window.scrollY >= top) current = section.id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(e, href) {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }
  }

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-6xl flex items-center justify-between gap-4 rounded-full brut-border-thick bg-surface px-4 py-2.5 md:px-6 md:py-3 transition-shadow duration-300 ${
          scrolled ? "shadow-brut-sm" : "shadow-brut"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 font-display font-bold text-lg md:text-xl shrink-0"
        >
          <span className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-yellow brut-border-thick flex items-center justify-center shadow-brut-sm">
            <Zap size={18} className="fill-ink" strokeWidth={2.5} />
          </span>
          <span className="hidden sm:inline">{profile.firstName}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 bg-cream rounded-full brut-border p-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative px-4 py-2 rounded-full font-display font-semibold text-sm transition-colors"
            >
              {active === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 bg-yellow brut-border rounded-full shadow-brut-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:inline-flex items-center gap-2 bg-ink text-cream font-display font-bold text-sm px-5 py-2.5 rounded-full brut-border shadow-brut-sm hover:-translate-y-0.5 hover:shadow-brut active:translate-y-0 active:shadow-none transition-all duration-200 shrink-0"
        >
          Let's Talk
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center bg-cream brut-border rounded-full shrink-0"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile menu sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-[72px] left-4 right-4 bg-surface brut-border-thick rounded-3xl shadow-brut p-3 flex flex-col gap-1 z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 rounded-2xl font-display font-semibold text-base transition-colors ${
                  active === link.href.slice(1) ? "bg-yellow brut-border shadow-brut-sm" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
