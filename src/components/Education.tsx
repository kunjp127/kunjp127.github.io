import { FaGraduationCap } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

type LegoColor = "blue" | "yellow" | "red" | "green" | "orange" | "purple" | "teal" | "pink";

interface CredentialItem {
  type: "degree" | "cert";
  title: string;
  institution: string;
  period: string;
  color: LegoColor;
  detail?: string;
}

const credentials: CredentialItem[] = [
  {
    type: "degree",
    title: "Master of Business Administration",
    institution: "The Pennsylvania State University",
    period: "2025 — 2026",
    color: "blue",
  },
  {
    type: "degree",
    title: "Bachelor of Science, Computer Science",
    institution: "The Pennsylvania State University",
    period: "2021 — 2025",
    color: "green",
    detail: "GPA 3.59",
  },
  {
    type: "cert",
    title: "AWS Certified AI Practitioner",
    institution: "Amazon Web Services",
    period: "2026",
    color: "orange",
  },
];

const colorMap: Record<LegoColor, { bg: string; stud: string; text: string }> = {
  blue:   { bg: "bg-lego-blue",   stud: "bg-lego-blue",   text: "text-white" },
  yellow: { bg: "bg-lego-yellow", stud: "bg-lego-yellow", text: "text-lego-dark" },
  red:    { bg: "bg-lego-red",    stud: "bg-lego-red",    text: "text-white" },
  green:  { bg: "bg-lego-green",  stud: "bg-lego-green",  text: "text-white" },
  orange: { bg: "bg-lego-orange", stud: "bg-lego-orange", text: "text-white" },
  purple: { bg: "bg-lego-purple", stud: "bg-lego-purple", text: "text-white" },
  teal:   { bg: "bg-lego-teal",   stud: "bg-lego-teal",   text: "text-white" },
  pink:   { bg: "bg-lego-pink",   stud: "bg-lego-pink",   text: "text-white" },
};

export default function Education() {
  return (
    <section
      id="education"
      className="px-10 lg:px-16 max-w-7xl mx-auto pb-15"
    >
      <div className="text-center mb-16 space-y-3">
        <div className="inline-block bg-lego-dark border-[2.5px] border-black border-b-[5px] rounded px-4 py-2">
          <span className="font-nunito font-black text-sm uppercase tracking-widest text-white">
            Building Blocks of Knowledge
          </span>
        </div>
        <h2 className="font-fredoka text-6xl text-lego-teal [text-shadow:3px_3px_0_#000]">
          Education &amp; Certs
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {credentials.map((item, i) => {
          const c = colorMap[item.color];
          const Icon = item.type === "degree" ? FaGraduationCap : GrCertificate;

          return (
            <div key={i} className="flex flex-col">
              {/* brick body */}
              <div
                className={`${c.bg} border-[3px] border-black border-b-[6px] rounded-lg px-6 py-7 space-y-4 flex-1 flex flex-col`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 flex items-center justify-center bg-white/90 border-2 border-black rounded-full">
                    <Icon className="text-lego-dark text-lg" />
                  </div>
                  <span
                    className={`font-nunito font-black text-sm uppercase tracking-widest ${c.text} opacity-90`}
                  >
                    {item.period}
                  </span>
                </div>

                <h3 className={`font-fredoka text-2xl leading-tight ${c.text}`}>
                  {item.title}
                </h3>

                <p
                  className={`font-nunito font-extrabold text-sm uppercase tracking-wide ${c.text} opacity-90`}
                >
                  {item.institution}
                </p>

                {item.detail && (
                  <div className="mt-auto pt-2">
                    <span className="inline-block bg-white/90 border-2 border-black rounded px-2.5 py-1 font-nunito font-black text-[11px] uppercase tracking-wide text-lego-dark">
                      {item.detail}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}