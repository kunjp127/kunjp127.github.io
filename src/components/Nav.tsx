export default function Nav() {
  return (
    <nav className="bg-lego-dark border-b-4 border-black">
      <div className="flex items-center justify-between h-16 px-8">
        <span className="font-fredoka text-lego-yellow text-3xl [text-shadow:2px_2px_0_#000]">
          <a
            href="#"
          >
            Kunj.build()
          </a>
        </span>

        <ul className="flex gap-4 list-none">
          {["Skills", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-5 py-2 bg-white/10 border-2 border-black border-b-4 rounded
                  font-nunito font-extrabold text-base uppercase tracking-wide text-white/90
                  hover:bg-white/20 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}