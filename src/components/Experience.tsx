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
    subtitle?: string;
    period: string;
    location: string;
    color: LegoColor;
    points: string[];
    stack: string[];
  }

  const jobs: Job[] = [
    {
      role: "Lead Software Engineer",
      company: "Impact Incubator",
      period: "May 2025 - Present",
      location: "State College, PA",
      color: "blue",
      points: [
        "Led a team of 3 developers building a cross-platform React Native mobile app (iOS/Android) used by 1,000 students and scaling to 18,000+ users.",
        "Architected and maintained a Node.js backend on AWS EC2 with MongoDB, implementing RESTful APIs, authentication, and scalable data storage.",
        "Managed CI/CD and mobile deployments via App Store Connect and Google Play Console, ensuring reliable releases and performance optimization.",
        "Collaborated with a funded AI startup to integrate AI-driven features, demonstrating applied awareness of Generative AI capabilities.",
      ],
      stack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "AWS EC2",
        "REST APIs",
        "CI/CD",
        "App Store Connect",
        "Google Play Console",
      ],
    },
    {
      role: "Lead Software Engineer",
      company: "THON",
      subtitle: "The world's largest student-run philanthropy - raised $254M+ for pediatric cancer, mobilizing 16,000+ volunteers",
      period: "April 2024 - Present",
      location: "State College, PA",
      color: "yellow",
      points: [
        "Built store.thon.org from the ground up - leading end-to-end development of a production full-stack e-commerce platform serving thousands of users and generating $30K/month in revenue.",
        "Developed a Vue.js frontend and Django backend, designing RESTful APIs for products, orders, transactions, and internal service integrations.",
        "Integrated Evalon payment processing with secure payment workflows adhering to PCI DSS compliance best practices including tokenization, encryption, and least-privilege access.",
        "Integrated the store with multiple internal services for inventory management, order fulfillment, and reporting, ensuring data consistency across THON systems.",
        "Deployed the application using a production-grade AWS ECS architecture with Docker, CloudFormation, S3, and CloudFront for scalable and repeatable deployments.",
        "Managed CI/CD pipelines, collaborated through GitHub pull requests, and worked in an Agile/Scrum development environment.",
        "Monitored and optimized system performance using OpenTelemetry and AWS X-Ray, while leading and mentoring 3 developers across engineering and design teams.",
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
        "AWS X-Ray",
        "PCI DSS",
        "CI/CD",
      ],
    },
    {
      role: "Tech Captain / Full Stack Software Engineer",
      company: "Penn State Homecoming",
      period: "2024 - Present",
      location: "State College, PA",
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
      role: "Solutions Engineer Intern",
      company: "Samtek Inc.",
      period: "June 2024 - August 2024",
      location: "Aldie, VA",
      color: "red",
      points: [
        "Developed AWS Lambda functions to analyze and display cloud usage costs, working within Scaled Agile development practices.",
        "Troubleshot and analyzed data pipelines involving Lambda, S3, Glue, Athena, and QuickSight, supporting backend data validation and visualization workflows.",
        "Debugged serverless applications and optimized data queries to improve reporting accuracy and performance.",
      ],
      stack: [
        "AWS Lambda",
        "S3",
        "Glue",
        "Athena",
        "QuickSight",
        "Python",
        "Scaled Agile",
      ],
    },
    {
      role: "THINK Developer",
      company: "THON",
      subtitle: "Internal tools powering the world's largest student-run philanthropy",
      period: "May 2023 - April 2024",
      location: "State College, PA",
      color: "purple",
      points: [
        "Developed internal software powering THON's core operations including finances, applications, and organizational workflows for 16,000+ volunteers.",
        "Built and maintained tools used across the organization to streamline data management and cross-team coordination.",
        "Demonstrated impact on internal tooling that led to promotion into the Lead Software Engineer role for store.thon.org.",
      ],
      stack: [
        "Python",
        "Django",
        "JavaScript",
        "REST APIs",
        "Internal Tools",
      ],
    },
    {
      role: "IT Support Specialist",
      company: "Penn State Scranton",
      period: "Sept 2022 - Aug 2023",
      location: "Dunmore, PA",
      color: "teal",
      points: [
        "Assisted professors, students, and staff in resolving IT issues ranging from network connectivity to complex classroom hardware failures.",
        "Debugged and maintained classroom technology including projectors, computers, microphones, and AV systems across multiple buildings.",
        "Imaged computers with PSU software across professor workstations, laptops, and personal devices; performed hands-on hardware troubleshooting and diagnosis.",
      ],
      stack: [
        "Hardware",
        "Imaging",
        "Networking",
        "AV Systems",
        "Troubleshooting",
        "Windows",
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
      className="px-5 sm:px-10 lg:px-16 pt-8 pb-24 max-w-7xl mx-auto"
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
        <h2 className="font-fredoka text-4xl sm:text-6xl text-lego-orange [text-shadow:3px_3px_0_#1a1a2e]">
          Experience
        </h2>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-black/10 rounded-full" />

        <div className="space-y-10 sm:space-y-16 md:space-y-24">
          {jobs.map((job, i) => {
            const c = colorMap[job.color];
            const alignRight = i % 2 === 1;

            return (
              <motion.div
                key={i}
                className={`relative md:grid md:grid-cols-2 md:gap-16 items-start`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
              >
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-lego-dark border-[3px] border-black z-10" />

                <div className={alignRight ? "md:col-start-2" : ""}>
                  <div
                    className={`relative ${
                      alignRight ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    <motion.div
                      className={`${c.bg} border-[3px] border-black border-b-[6px] rounded-lg px-4 sm:px-7 py-5 sm:py-6 space-y-3 sm:space-y-4`}
                      whileHover={{ scale: 1.02, rotate: 0.3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3
                          className={`font-fredoka text-xl sm:text-3xl ${c.text} leading-none`}
                        >
                          {job.role}
                        </h3>
                        <span
                          className={`font-nunito font-black text-xs uppercase tracking-widest ${c.text} opacity-80`}
                        >
                          {job.period}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p
                          className={`font-nunito font-extrabold text-base uppercase tracking-wide ${c.text}`}
                        >
                          {job.company}
                        </p>
                        <span className={`font-nunito font-bold text-xs ${c.text} opacity-70`}>
                          {job.location}
                        </span>
                      </div>

                      {job.subtitle && (
                        <p className={`font-nunito font-semibold text-xs italic ${c.text} opacity-80 -mt-2`}>
                          {job.subtitle}
                        </p>
                      )}

                      <ul className="space-y-2">
                        {job.points.map((pt, j) => (
                          <li
                            key={j}
                            className={`font-nunito text-sm leading-relaxed ${c.text} flex gap-2`}
                          >
                            <span className="opacity-90 shrink-0">▪</span>
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
