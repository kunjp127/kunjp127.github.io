import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  color: string;
}

const featuredStat: Stat = {
  label: "Revenue Generated",
  value: 275,
  suffix: "M+",
  color: "bg-lego-purple",
};

const stats: Stat[] = [
  { label: "Years Experience", value: 3, suffix: "+", color: "bg-lego-blue" },
  { label: "Projects Shipped", value: 10, suffix: "+", color: "bg-lego-green" },
  { label: "Tech Stack", value: 15, suffix: "+", color: "bg-lego-orange" },
  { label: "Users Impacted", value: 100, suffix: "K+", color: "bg-lego-red" },
];

function Counter({
  value,
  suffix,
  size = "text-2xl sm:text-4xl",
}: {
  value: number;
  suffix: string;
  size?: string;
}) {
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
    <span
      ref={ref}
      className={`font-fredoka ${size} text-white [text-shadow:2px_2px_0_rgba(0,0,0,0.3)]`}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 pb-12">
      <p className="sr-only">
        {featuredStat.label}: {featuredStat.value}
        {featuredStat.suffix}. {stats.map((s) => `${s.label}: ${s.value}${s.suffix}.`).join(" ")}
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`${featuredStat.color} relative border-[4px] border-black border-b-[8px] rounded-xl px-6 py-6 sm:py-8 text-center flex flex-col items-center gap-1 mb-4 sm:mb-6 shadow-[0_0_0_3px_rgba(0,0,0,0.05)]`}
        // itemScope/itemProp gives structured semantics search engines & AI agents can parse
        itemScope
        itemType="https://schema.org/MonetaryAmount"
      >
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lego-yellow text-black font-nunito font-black text-[9px] sm:text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border-[2px] border-black">
          Top Achievement
        </span>
        <Counter value={featuredStat.value} suffix={featuredStat.suffix} size="text-4xl sm:text-6xl" />
        <span
          className="font-nunito font-black text-[11px] sm:text-sm uppercase tracking-wider text-white/95"
          itemProp="name"
        >
          {featuredStat.label}
        </span>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
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
    </div>
  );
}