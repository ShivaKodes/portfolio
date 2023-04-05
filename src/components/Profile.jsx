import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import me from "../assets/pass-pic.png";
// import me from "../assets/me.jpeg";

export default function Profile() {
  return (
    <div className="col-span-3 flex flex-row items-center gap-6 text-white/80 h-[128px]">
      <img src={me} alt="" className="w-[30%] max-w-[200px] rounded-full " />
      <a
        href="https://www.linkedin.com/in/shivakumar17"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#0077b5] drop-shadow-lg"
      >
        <BsLinkedin size={24} />
      </a>
      <a
        href="https://www.github.com/ShivaKodes"
        target="_blank"
        rel="noopener noreferrer "
        className="hover:text-[#4078c0]"
      >
        <BsGithub size={24} />
      </a>
      <a
        href="https://twitter.com/__shk20_"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#1DA1F2]"
      >
        <BsTwitter size={24} />
      </a>
    </div>
  );
}
