import { motion } from "framer-motion";

const BRICK_COUNT = 60; 
const MIN_DURATION = 10; 
const MAX_DURATION = 10; 
const MAX_DELAY = 6; 

const COLORS = [
  "bg-lego-red",
  "bg-lego-blue",
  "bg-lego-yellow",
  "bg-lego-green",
  "bg-lego-orange",
  "bg-lego-purple",
  "bg-lego-teal",
  "bg-lego-pink",
];

const SIZES = [
  "w-5 h-3",
  "w-6 h-4",
  "w-7 h-4",
  "w-8 h-5",
  "w-9 h-5",
  "w-10 h-6",
];

const BRICKS = Array.from({ length: BRICK_COUNT }, (_, i) => ({
  color: COLORS[i % COLORS.length],
  size: SIZES[Math.floor(Math.random() * SIZES.length)],
  x: `${Math.random() * 100}%`,
  delay: Math.random() * MAX_DELAY,
  duration:
    MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION),
}));

export default function FloatingBricks() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {BRICKS.map((brick, i) => (
        <motion.div
          key={i}
          className={`absolute ${brick.color} ${brick.size} rounded-sm border border-black/20 opacity-[0.07]`}
          style={{ left: brick.x }}
          initial={{ y: "110vh", rotate: 0 }}
          animate={{
            y: "-10vh",
            rotate: [0, 15, -10, 20, 0],
          }}
          transition={{
            y: {
              duration: brick.duration,
              repeat: Infinity,
              delay: brick.delay,
              ease: "linear",
            },
            rotate: {
              duration: 3,
              repeat: Infinity,
              delay: brick.delay,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
}