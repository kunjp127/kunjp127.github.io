import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TiltImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 12, y: x * 12 });
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={isMobile ? {} : { rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={isMobile ? {} : { perspective: 800, transformStyle: "preserve-3d" }}
      className="border-black max-w-xs mx-auto md:max-w-none"
    >
      <div className="border-[3px] rounded-t-lg overflow-hidden bg-[#9aa8bc] aspect-3/4 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
        <img
          src="/headshot.jpg"
          alt="Kunj Patel - Full-Stack Software Engineer"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="bg-lego-red border-[3px] border-t-0 rounded-b-lg py-2 sm:py-3 text-center">
        <span className="font-nunito font-black text-xs sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.24em] text-white">
          Kunj Patel · Software Engineer
        </span>
      </div>
    </motion.div>
  );
}
