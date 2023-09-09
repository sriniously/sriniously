import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoProductHunt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="flex py-5 justify-center items-center w-full gap-3 border-t-2 border-primary">
      <a
        href="https://github.com/hellskater"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillGithub className="text-black text-lg" />
      </a>
      <a
        href="https://twitter.com/Srinu53168"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaXTwitter className="text-black text-lg" />
      </a>
      <a
        href="https://www.producthunt.com/@srini53168"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BiLogoProductHunt className="text-black text-lg" />
      </a>
      <a
        href="https://www.linkedin.com/in/k-srinivas53168/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiFillLinkedin className="text-black text-lg" />
      </a>
    </footer>
  );
};

export default Footer;
