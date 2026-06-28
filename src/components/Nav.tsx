import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="bg-lego-dark border-b-4 border-black sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-5 md:px-8">
        <span className="font-fredoka text-lego-yellow text-3xl [text-shadow:2px_2px_0_#000]">
          <a href="#">Kunj.build()</a>
        </span>

        <ul className="hidden md:flex gap-4 list-none">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-5 py-2 bg-white/10 border-2 border-black border-b-4 rounded font-nunito 
                  font-extrabold text-sm uppercase tracking-wide text-white/90 hover:bg-white/20 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
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

      {open && (
        <ul className="md:hidden flex flex-col list-none border-t-2 border-black/40">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 font-nunito font-extrabold text-sm uppercase tracking-wide 
                  text-white/90 border-b border-white/10 hover:bg-white/10 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}