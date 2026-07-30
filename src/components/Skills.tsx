import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaVuejs, FaGitAlt,
} from "react-icons/fa6";
import {
  SiTypescript, SiDjango, SiMongodb, SiPostgresql, SiTailwindcss, SiGraphql,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: "React", icon: <FaReact />, color: "bg-lego-blue" },
  { name: "TypeScript", icon: <SiTypescript />, color: "bg-lego-blue" },
  { name: "Node.js", icon: <FaNodeJs />, color: "bg-lego-green" },
  { name: "Python", icon: <FaPython />, color: "bg-lego-yellow" },
  { name: "AWS", icon: <FaAws />, color: "bg-lego-orange" },
  { name: "Docker", icon: <FaDocker />, color: "bg-lego-blue" },
  { name: "Vue.js", icon: <FaVuejs />, color: "bg-lego-green" },
  { name: "Django", icon: <SiDjango />, color: "bg-lego-green" },
  { name: "MongoDB", icon: <SiMongodb />, color: "bg-lego-green" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-lego-blue" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "bg-lego-teal" },
  { name: "GraphQL", icon: <SiGraphql />, color: "bg-lego-pink" },
  { name: "Git", icon: <FaGitAlt />, color: "bg-lego-red" },
];

export default function Skills() {
  return (
    <section id="skills" className="px-10 lg:px-16 py-20 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block bg-lego-dark border-[2.5px] border-black border-b-[5px] rounded px-4 py-2">
          <span className="font-nunito font-black text-sm uppercase tracking-widest text-white">
            My Brick Collection
          </span>
        </div>
        <h2 className="font-fredoka text-6xl text-lego-purple [text-shadow:3px_3px_0_#000]">
          Skills &amp; Tools
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1, rotate: 2, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`${skill.color} border-[3px] border-black border-b-[6px] rounded-lg p-5 flex flex-col items-center gap-3 cursor-default`}
          >
            <span className="text-3xl text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.3)]">
              {skill.icon}
            </span>
            <span className="font-nunito font-black text-xs uppercase tracking-wider text-white">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
