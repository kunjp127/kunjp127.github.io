import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  stack: string[];
  color: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "THON E-Commerce Store",
    description:
      "Full-stack e-commerce platform generating ~$30K/month in revenue. Built with Vue.js frontend, Django REST backend, and deployed on AWS ECS with Docker.",
    stack: ["Vue.js", "Django", "AWS ECS", "Docker", "S3", "CloudFront"],
    color: "bg-lego-blue",
    live: "https://store.thon.org",
  },
  {
    title: "Impact Incubator App",
    description:
      "React Native mobile app serving 1,000+ students with a Node.js backend on AWS. Features authentication, real-time data, and Generative AI integrations.",
    stack: ["React Native", "Node.js", "MongoDB", "AWS EC2", "GenAI"],
    color: "bg-lego-green",
  },
  {
    title: "Inventory Management System",
    description:
      "Internal tool built from scratch for Penn State Homecoming. Streamlines inventory tracking with a containerized Django + Vue.js stack on Linux.",
    stack: ["Django", "Vue.js", "Docker", "Docker Compose", "Linux"],
    color: "bg-lego-orange",
  },
  {
    title: "Cloud Cost Analyzer",
    description:
      "Serverless pipeline for cloud cost analysis and reporting at Samtek Inc. Leverages AWS Lambda, Glue, and Athena for optimized data queries.",
    stack: ["AWS Lambda", "Python", "Glue", "Athena", "QuickSight"],
    color: "bg-lego-red",
  },
  {
    title: "Portfolio Site",
    description:
      "This very site! A LEGO-themed portfolio built with React, Tailwind CSS, and Framer Motion. Designed to impress both humans and AI reviewers.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
    color: "bg-lego-purple",
    github: "https://github.com/kunjp127/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-10 lg:px-16 py-20 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block bg-lego-dark border-[2.5px] border-black border-b-[5px] rounded px-4 py-2">
          <span className="font-nunito font-black text-sm uppercase tracking-widest text-white">
            What I've Built
          </span>
        </div>
        <h2 className="font-fredoka text-6xl text-lego-blue [text-shadow:3px_3px_0_#000]">
          Projects
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ scale: 1.02, rotate: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`${project.color} border-[3px] border-black border-b-[6px] rounded-lg p-7 flex flex-col gap-4`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-fredoka text-2xl text-white leading-tight">
                {project.title}
              </h3>
              <div className="flex gap-2 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-white/90 border-2 border-black rounded-full hover:bg-white transition-colors"
                  >
                    <FaGithub className="text-lego-dark text-sm" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-white/90 border-2 border-black rounded-full hover:bg-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lego-dark text-xs" />
                  </a>
                )}
              </div>
            </div>

            <p className="font-nunito text-sm leading-relaxed text-white/90 font-semibold">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/90 border-2 border-black rounded px-2.5 py-1 font-nunito font-black text-[11px] uppercase tracking-wide text-lego-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
