import { FaDownload, FaGithub } from "react-icons/fa6";

import LegoButton from "./LegoButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="px-10 lg:px-16 pt-16 pb-4 min-h-[85vh] flex items-start"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-24 items-center">
        <div className="space-y-6">
          <div className="inline-block bg-lego-red border-[2.5px] border-black border-b-[5px] rounded px-4 py-2">
            <span className="font-nunito font-black text-sm uppercase tracking-widest text-white">
              Software Engineer · Open to Work
            </span>
          </div>

          <div className="leading-[0.9] space-y-2">
            <p className="font-fredoka text-8xl text-lego-blue [text-shadow:4px_4px_0_#000] m-0">
              Kunj
            </p>
            <p className="font-fredoka text-8xl text-lego-orange [text-shadow:4px_4px_0_#000] m-0">
              Patel
            </p>
          </div>

          <div className="inline-block bg-lego-yellow border-[3px] border-black border-b-[5px] rounded-md px-6 py-4">
            <p className="font-nunito font-black text-lg uppercase tracking-wider text-lego-dark m-0">
              Full-Stack Engineer
            </p>
            <p className="font-nunito font-bold text-base text-[#5a4500] mt-1">
              Build. Ship. Repeat.
            </p>
          </div>

          <p className="text-lg leading-[1.8] text-gray-800 max-w-prose">
            I build Legos for fun. I build software to afford more Legos.
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-3 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-8">
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
          </div>
        </div>

        <div className="border-black">
          <div className="border-[3px] rounded-t-lg overflow-hidden bg-[#9aa8bc] aspect-3/4">
            <img
              src="/headshot.jpg"
              alt="Kunj Patel"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="bg-lego-red border-[3px] border-t-0 rounded-b-lg py-3 text-center">
            <span className="font-nunito font-black text-base uppercase tracking-[0.24em] text-white">
              Kunj Patel · Software Engineer
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}