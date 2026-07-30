import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Experience", "Projects", "Skills", "Education", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      let current = "";
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`bg-lego-dark border-b-4 border-black sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
    >
      <div className="flex items-center justify-between h-16 px-5 md:px-8">
        <motion.span
          className="font-fredoka text-lego-yellow text-3xl [text-shadow:2px_2px_0_#000]"
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a href="#">Kunj.build()</a>
        </motion.span>

        <ul className="hidden md:flex gap-3 list-none">
          {links.map((item, i) => {
            const isActive = active === item.toLowerCase();
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-2 border-2 border-black border-b-4 rounded font-nunito
                    font-extrabold text-sm uppercase tracking-wide transition-colors ${
                      isActive
                        ? "bg-lego-yellow text-lego-dark"
                        : "bg-white/10 text-white/90 hover:bg-white/20"
                    }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              </motion.li>
            );
          })}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.25 p-2 bg-white/10 border-2 border-black border-b-4 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${open ? "translate-y-1.75 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${open ? "-translate-y-1.75 -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="md:hidden flex flex-col list-none border-t-2 border-black/40 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
          >
            {links.map((item) => {
              const isActive = active === item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className={`block px-6 py-3 font-nunito font-extrabold text-sm uppercase tracking-wide
                      border-b border-white/10 transition-colors ${
                        isActive
                          ? "bg-lego-yellow/20 text-lego-yellow"
                          : "text-white/90 hover:bg-white/10"
                      }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
