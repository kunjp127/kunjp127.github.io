import React from "react";

type LegoColor = "red" | "yellow" | "blue" | "green";

interface LegoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: LegoColor;
  studs?: number;
}

const colorMap: Record<LegoColor, string> = {
  red: "bg-lego-red",
  yellow: "bg-lego-yellow text-black",
  blue: "bg-lego-blue",
  green: "bg-lego-green",
};

export default function LegoButton({
  color = "blue",
  studs = 3,
  children,
  className = "",
  ...props
}: LegoButtonProps) {
  const baseColor = colorMap[color];

  return (
    <button
      {...props}
      className={[
        "relative select-none",
        "w-44 h-20 rounded-sm",
        "font-nunito font-bold",
        "transition-all duration-150 ease-out",
        "active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.25)]",
        "hover:-translate-y-1 hover:rotate-[0.3deg] hover:brightness-110",
        "cursor-pointer",
        baseColor,
        className,
      ].join(" ")}
    >
      <div className="absolute -top-3 left-3 right-3 flex justify-between">
        {Array.from({ length: studs }).map((_, i) => (
          <div
            key={i}
            className={[
              "h-4 w-8 rounded-t-sm",
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
    </button>
  );
}