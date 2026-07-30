import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

const links = [
  {
    label: "Email",
    href: "mailto:kunjp0127@gmail.com",
    icon: <FaEnvelope />,
    color: "bg-lego-red",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kunj-patel-a88350237/",
    icon: <FaLinkedin />,
    color: "bg-lego-blue",
  },
  {
    label: "GitHub",
    href: "https://github.com/kunjp127",
    icon: <FaGithub />,
    color: "bg-lego-dark",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-10 lg:px-16 py-12 sm:py-20 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-12 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block bg-lego-dark border-[2.5px] border-black border-b-[5px] rounded px-4 py-2">
          <span className="font-nunito font-black text-sm uppercase tracking-widest text-white">
            Let's Connect
          </span>
        </div>
        <h2 className="font-fredoka text-4xl sm:text-6xl text-lego-red [text-shadow:3px_3px_0_#000]">
          Get In Touch
        </h2>
        <p className="font-nunito text-lg text-gray-700 max-w-md mx-auto pt-2">
          Got a project idea, job opportunity, or just want to talk Legos? Snap a message together.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.08, rotate: 1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`${link.color} border-[3px] border-black border-b-[6px] rounded-lg px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-center gap-3 sm:gap-4 no-underline`}
          >
            <span className="text-3xl text-white">{link.icon}</span>
            <span className="font-nunito font-black text-lg uppercase tracking-wider text-white">
              {link.label}
            </span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16 sm:mt-20 pt-8 border-t-2 border-black/10 space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="font-nunito font-bold text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
          Languages Spoken: English · Gujarati · Hindi
        </p>
        <p className="font-nunito font-bold text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
          Built brick by brick with React &amp; Tailwind
        </p>
      </motion.div>
    </section>
  );
}
