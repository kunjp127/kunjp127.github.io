import { motion } from "framer-motion";

export default function Experience() {
  type LegoColor =
    | "blue"
    | "yellow"
    | "red"
    | "green"
    | "orange"
    | "purple"
    | "teal"
    | "pink";

  interface Job {
    role: string;
    company: string;
    period: string;
    color: LegoColor;
    points: string[];
    stack: string[];
  }

  const jobs: Job[] = [
    {
      role: "Lead Software Engineer",
      company: "Impact Incubator",
      period: "May 2025 — Present",
      color: "blue",
      points: [
        "Leading a team of 3 developers building a React Native app serving 1,000+ students and designed to scale to 18,000+ users.",
        "Architected a Node.js backend on AWS EC2 with MongoDB, REST APIs, authentication, and scalable data storage.",
        "Managed App Store & Google Play deployments, CI/CD pipelines, and collaborated with an AI startup on Generative AI features.",
      ],
      stack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "AWS EC2",
        "REST APIs",
        "CI/CD",
      ],
    },
    {
      role: "Lead Software Engineer",
      company: "THON",
      period: "April 2024 — Present",
      color: "yellow",
      points: [
        "Led development of store.thon.org, a production e-commerce platform generating ~$30K/month.",
        "Built a Vue.js + Django full-stack application with secure payment processing and RESTful APIs.",
        "Deployed on AWS ECS using Docker and CloudFormation while mentoring 3 developers in an Agile environment.",
      ],
      stack: [
        "Vue.js",
        "Django",
        "AWS ECS",
        "Docker",
        "CloudFormation",
        "S3",
        "CloudFront",
        "OpenTelemetry",
      ],
    },
    {
      role: "Tech Captain / Full Stack Software Engineer",
      company: "Penn State Homecoming",
      period: "2024 — Present",
      color: "green",
      points: [
        "Designed and built an internal inventory management system from the ground up as the sole developer.",
        "Developed a full-stack application using Django and Vue.js to streamline inventory tracking and management.",
        "Containerized the application with Docker and Docker Compose and deployed it independently to a Linux virtual machine.",
      ],
      stack: [
        "Django",
        "Vue.js",
        "Docker",
        "Docker Compose",
        "Linux",
        "REST APIs",
      ],
    },
    {
      role: "THINK Developer",
      company: "THON",
      period: "May 2023 — April 2024",
      color: "purple",
      points: [
        "Developed internal software powering THON's inner workings including finances, applications, and organizational operations.",
        "Built and maintained local tools used across the organization to streamline workflows and data management.",
        "Transitioned into the Lead Software Engineer role for store.thon.org after demonstrating impact on internal tooling.",
      ],
      stack: [
        "Python",
        "Django",
        "JavaScript",
        "Internal Tools",
      ],
    },
    {
      role: "Solutions Engineer Intern",
      company: "Samtek Inc.",
      period: "June 2024 — August 2024",
      color: "red",
      points: [
        "Developed AWS Lambda functions for cloud cost analysis and reporting.",
        "Troubleshot data pipelines using Lambda, S3, Glue, Athena, and QuickSight.",
        "Optimized serverless applications and data queries to improve reporting performance.",
      ],
      stack: [
        "AWS Lambda",
        "S3",
        "Glue",
        "Athena",
        "QuickSight",
        "Python",
      ],
    },
    {
      role: "IT Support Specialist",
      company: "Penn State Scranton",
      period: "Sept 2022 — Aug 2023",
      color: "teal",
      points: [
        "Assisted professors, students, and staff in resolving IT issues ranging from basic connectivity to complex classroom hardware.",
        "Debugged and maintained classroom technology including projectors, computers, microphones, and AV systems.",
        "Imaged computers with PSU software across professor workstations, laptops, and personal devices; performed hands-on hardware troubleshooting.",
      ],
      stack: [
        "Hardware",
        "Imaging",
        "Networking",
        "AV Systems",
        "Troubleshooting",
      ],
    },
  ];

  const colorMap: Record<LegoColor, { bg: string; text: string }> = {
    blue: { bg: "bg-lego-blue", text: "text-white" },
    yellow: { bg: "bg-lego-yellow", text: "text-lego-dark" },
    red: { bg: "bg-lego-red", text: "text-white" },
    green: { bg: "bg-lego-green", text: "text-white" },
    orange: { bg: "bg-lego-orange", text: "text-white" },
    purple: { bg: "bg-lego-purple", text: "text-white" },
    teal: { bg: "bg-lego-teal", text: "text-white" },
    pink: { bg: "bg-lego-pink", text: "text-white" },
  };

  return (
    <section
      id="experience"
      className="px-10 lg:px-16 pt-8 pb-24 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-16 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block bg-lego-dark border-[2.5px] border-black border-b-[5px] rounded px-4 py-2">
          <span className="font-nunito font-black text-sm uppercase tracking-widest text-white">
            Where I've Snapped In
          </span>
        </div>
        <h2 className="font-fredoka text-6xl text-lego-orange [text-shadow:3px_3px_0_#1a1a2e]">
          Experience
        </h2>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-black/10 rounded-full" />

        <div className="space-y-16 md:space-y-24">
          {jobs.map((job, i) => {
            const c = colorMap[job.color];
            const alignRight = i % 2 === 1;

            return (
              <motion.div
                key={i}
                className={`relative md:grid md:grid-cols-2 md:gap-16 items-start`}
                initial={{ opacity: 0, x: alignRight ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-lego-dark border-[3px] border-black z-10" />

                <div className={alignRight ? "md:col-start-2" : ""}>
                  <div
                    className={`relative ${
                      alignRight ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    <motion.div
                      className={`${c.bg} border-[3px] border-black border-b-[6px] rounded-lg px-7 py-6 space-y-4`}
                      whileHover={{ scale: 1.02, rotate: 0.3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3
                          className={`font-fredoka text-3xl ${c.text} leading-none`}
                        >
                          {job.role}
                        </h3>
                        <span
                          className={`font-nunito font-black text-xs uppercase tracking-widest ${c.text} opacity-80`}
                        >
                          {job.period}
                        </span>
                      </div>

                      <p
                        className={`font-nunito font-extrabold text-base uppercase tracking-wide ${c.text}`}
                      >
                        {job.company}
                      </p>

                      <ul className="space-y-2">
                        {job.points.map((pt, j) => (
                          <li
                            key={j}
                            className={`font-nunito text-sm leading-relaxed ${c.text} flex gap-2`}
                          >
                            <span className="opacity-90">▪</span>
                            <span className="font-semibold">{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-white/90 border-2 border-black rounded px-2.5 py-1 font-nunito font-black text-[11px] uppercase tracking-wide text-lego-dark"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
