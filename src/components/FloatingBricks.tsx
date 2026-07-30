import { motion } from "framer-motion";

const BRICKS = [
  { color: "bg-lego-red", size: "w-8 h-5", x: "5%", delay: 0 },
  { color: "bg-lego-blue", size: "w-6 h-4", x: "15%", delay: 2 },
  { color: "bg-lego-yellow", size: "w-10 h-6", x: "25%", delay: 4 },
  { color: "bg-lego-green", size: "w-7 h-4", x: "38%", delay: 1 },
  { color: "bg-lego-orange", size: "w-5 h-3", x: "52%", delay: 3 },
  { color: "bg-lego-purple", size: "w-8 h-5", x: "65%", delay: 5 },
  { color: "bg-lego-teal", size: "w-6 h-4", x: "78%", delay: 2.5 },
  { color: "bg-lego-pink", size: "w-9 h-5", x: "88%", delay: 1.5 },
  { color: "bg-lego-red", size: "w-5 h-3", x: "45%", delay: 4.5 },
  { color: "bg-lego-blue", size: "w-7 h-4", x: "92%", delay: 0.5 },
];

export default function FloatingBricks() {
  return (
    <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden z-0">
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
            y: { duration: 18 + i * 2, repeat: Infinity, delay: brick.delay, ease: "linear" },
            rotate: { duration: 8, repeat: Infinity, delay: brick.delay, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}
