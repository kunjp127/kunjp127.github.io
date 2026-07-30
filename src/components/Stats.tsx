import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  color: string;
}

const stats: Stat[] = [
  { label: "Years Experience", value: 3, suffix: "+", color: "bg-lego-blue" },
  { label: "Projects Shipped", value: 10, suffix: "+", color: "bg-lego-green" },
  { label: "Tech Stack", value: 15, suffix: "+", color: "bg-lego-orange" },
  { label: "Users Impacted", value: 100, suffix: "K+", color: "bg-lego-red" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(duration / value);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-fredoka text-2xl sm:text-4xl text-white [text-shadow:2px_2px_0_rgba(0,0,0,0.3)]">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto px-5 sm:px-10 lg:px-16 pb-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: { opacity: 1, scale: 1 },
          }}
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`${stat.color} border-[3px] border-black border-b-[6px] rounded-lg p-3 sm:p-5 text-center flex flex-col items-center gap-1`}
        >
          <Counter value={stat.value} suffix={stat.suffix} />
          <span className="font-nunito font-black text-[9px] sm:text-[11px] uppercase tracking-wider text-white/90">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
