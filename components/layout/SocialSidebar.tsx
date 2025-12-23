import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function SocialSidebar(){
    return(
      <div className="fixed left-6 bottom-10 z-50 hidden flex-col items-center gap-5 md:flex">
      <a
        href="https://github.com/gdjonret"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-slate-400 hover:text-white transition"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/gloria-djonret-3547a5105/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-slate-400 hover:text-white transition"
      >
        <FaLinkedinIn size={20} />
      </a>

      <a
        href="mailto:your@gmail.com"
        aria-label="Email"
        className="text-slate-400 hover:text-white transition"
      >
        <HiOutlineMail size={22} />
      </a>

      {/* little line under icons */}
      {/*<div className="mt-3 h-24 w-px bg-slate-600/50" />*/}
    </div>
    );
}