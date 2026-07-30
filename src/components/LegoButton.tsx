import { motion } from "framer-motion";

type LegoColor = "red" | "yellow" | "blue" | "green" | "purple";

interface LegoButtonProps {
  color?: LegoColor;
  studs?: number;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const colorMap: Record<LegoColor, string> = {
  red: "bg-lego-red",
  yellow: "bg-lego-yellow text-black",
  blue: "bg-lego-blue",
  green: "bg-lego-green",
  purple: "bg-lego-purple",
};

export default function LegoButton({
  color = "blue",
  studs = 3,
  children,
  className = "",
  onClick,
}: LegoButtonProps) {
  const baseColor = colorMap[color];

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -4, rotate: 0.5 }}
      whileTap={{ scale: 0.95, y: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={[
        "relative select-none",
        "w-44 h-20 rounded-sm",
        "font-nunito font-bold",
        "cursor-pointer",
        "border-[2.5px] border-black",
        baseColor,
        className,
      ].join(" ")}
    >
      <div className="absolute -top-3 left-3 right-3 flex justify-between">
        {Array.from({ length: studs }).map((_, i) => (
          <div
            key={i}
            className={[
              "h-4 w-8 rounded-t-sm border-[2.5px] border-black border-b-0",
              baseColor,
            ].join(" ")}
          />
        ))}
      </div>

      <div className="flex h-full items-center justify-center px-6 pb-2">
        <span className="text-lg sm:text-xl leading-tight text-white text-center">
          {children}
        </span>
      </div>
    </motion.button>
  );
}
