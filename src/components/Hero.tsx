import { FaDownload, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

import LegoButton from "./LegoButton";
import TiltImage from "./TiltImage";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="px-10 lg:px-16 pt-16 pb-4 min-h-[85vh] flex items-start overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-24 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-6">
          <motion.div variants={fadeUp} className="inline-block bg-lego-red border-[2.5px] border-black border-b-[5px] rounded px-4 py-2">
            <span className="font-nunito font-black text-sm uppercase tracking-widest text-white">
              Software Engineer · Open to Work
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="leading-[0.9] space-y-2">
            <motion.p
              className="font-fredoka text-8xl text-lego-blue [text-shadow:4px_4px_0_#000] m-0"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              Kunj
            </motion.p>
            <motion.p
              className="font-fredoka text-8xl text-lego-orange [text-shadow:4px_4px_0_#000] m-0"
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            >
              Patel
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp} className="inline-block bg-lego-yellow border-[3px] border-black border-b-[5px] rounded-md px-6 py-4">
            <p className="font-nunito font-black text-lg uppercase tracking-wider text-lego-dark m-0">
              Full-Stack Engineer
            </p>
            <p className="font-nunito font-bold text-base text-[#5a4500] mt-1">
              Build. Ship. Repeat.
            </p>
          </motion.div>

          <motion.p variants={fadeUp} className="text-lg leading-[1.8] text-gray-800 max-w-prose">
            I build Legos for fun. I build software to afford more Legos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-x-4 gap-y-6 pt-3 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-8"
          >
            <LegoButton onClick={() => window.location.href = "#projects"} color="blue" studs={3}>
              View Projects
            </LegoButton>

            <LegoButton
              color="yellow"
              studs={3}
              onClick={() => window.open("/Kunj_Patel_Resume.pdf", "_blank", "noopener,noreferrer")}
            >
              <div className="flex items-center justify-center gap-2 text-lg sm:text-xl">
                <FaDownload />
                <span>Resume</span>
              </div>
            </LegoButton>

            <LegoButton
              color="purple"
              studs={3}
              onClick={() => window.open("https://github.com/kunjp127", "_blank", "noopener,noreferrer")}
            >
              <div className="flex items-center justify-center gap-2 text-lg sm:text-xl">
                <FaGithub />
                <span>Github</span>
              </div>
            </LegoButton>

            <LegoButton onClick={() => window.location.href = "#contact"} color="red" studs={3}>
              Contact
            </LegoButton>
          </motion.div>
        </div>

        <motion.div variants={scaleIn}>
          <TiltImage />
        </motion.div>

      </motion.div>
    </section>
  );
}
