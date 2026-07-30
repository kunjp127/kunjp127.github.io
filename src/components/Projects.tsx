import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  color: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "THON E-Commerce Store",
    description:
      "Production full-stack e-commerce platform for the world's largest student-run philanthropy ($254M+ raised).",
    highlights: [
      "Generates $30K/month in revenue serving thousands of users",
      "PCI DSS compliant payment processing with Evalon integration",
      "Production-grade AWS ECS architecture with Docker, CloudFormation, S3, and CloudFront",
    ],
    stack: ["Vue.js", "Django", "AWS ECS", "Docker", "CloudFormation", "PCI DSS"],
    color: "bg-lego-blue",
    live: "https://store.thon.org",
  },
  {
    title: "Impact Incubator Mobile App",
    description:
      "Cross-platform mobile application (iOS/Android) serving 1,000 students and designed to scale to 18,000+ users.",
    highlights: [
      "Led team of 3 developers with CI/CD via App Store Connect & Google Play",
      "Node.js backend on AWS EC2 with MongoDB and RESTful APIs",
      "AI-driven features in collaboration with a funded AI startup",
    ],
    stack: ["React Native", "Node.js", "MongoDB", "AWS EC2", "GenAI", "CI/CD"],
    color: "bg-lego-green",
  },
  {
    title: "Karya",
    description:
      "Cross-platform mobile application for note-taking and task management with cloud synchronization.",
    highlights: [
      "Built with Flutter for seamless iOS/Android experience",
      "Serverless backend with AWS Lambda and DynamoDB for low-latency data storage",
      "Features task creation, categorization, and real-time cloud sync",
    ],
    stack: ["Flutter", "AWS Lambda", "DynamoDB", "Dart"],
    color: "bg-lego-orange",
  },
  {
    title: "Inventory Management System",
    description:
      "Internal tool built from scratch as the sole developer for Penn State Homecoming operations.",
    highlights: [
      "Full-stack Django + Vue.js application for inventory tracking",
      "Containerized with Docker and deployed to Linux VM",
      "Streamlined management workflows across the organization",
    ],
    stack: ["Django", "Vue.js", "Docker", "Docker Compose", "Linux"],
    color: "bg-lego-red",
  },
  {
    title: "Cloud Cost Analyzer",
    description:
      "Serverless data pipeline for cloud usage cost analysis and executive reporting at Samtek Inc.",
    highlights: [
      "AWS Lambda functions for automated cost analysis",
      "Data pipeline with S3, Glue, Athena, and QuickSight",
      "Optimized queries improving reporting accuracy and performance",
    ],
    stack: ["AWS Lambda", "Python", "S3", "Glue", "Athena", "QuickSight"],
    color: "bg-lego-purple",
  },
  {
    title: "Portfolio Site",
    description:
      "LEGO-themed portfolio with Framer Motion animations, structured data for AI parsing, and responsive design.",
    highlights: [
      "React + TypeScript with Tailwind CSS and Framer Motion",
      "JSON-LD structured data for ATS and AI hiring tool compatibility",
      "3D tilt effects, scroll-reveal animations, and spring physics",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
    color: "bg-lego-teal",
    github: "https://github.com/kunjp127/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-5 sm:px-10 lg:px-16 py-12 sm:py-20 max-w-7xl mx-auto">
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
        <h2 className="font-fredoka text-4xl sm:text-6xl text-lego-blue [text-shadow:3px_3px_0_#000]">
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
            className={`${project.color} border-[3px] border-black border-b-[6px] rounded-lg p-5 sm:p-7 flex flex-col gap-3 sm:gap-4`}
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

            <p className="font-nunito text-sm leading-relaxed text-white/90 font-bold">
              {project.description}
            </p>

            <ul className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="font-nunito text-xs leading-relaxed text-white/85 flex gap-2">
                  <span className="shrink-0">▪</span>
                  <span className="font-semibold">{h}</span>
                </li>
              ))}
            </ul>

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
