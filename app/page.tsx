import { PenTool, Mic } from "lucide-react";
import { Link } from "next-view-transitions";
import { Timeline } from "@/components/ui/timeline";
import YouTubeEmbed from "@/components/youtube";
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";

const data = [
  {
    title: "I work as a software engineer",
    content: (
      <a
        href="https://www.linkedin.com/in/k-srinivas53168/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin className="w-60 h-60" />
      </a>
    ),
  },
  {
    title: "I teach backend on YouTube",
    content: (
      <div className="space-y-4">
        <a
          href="https://youtube.com/@sriniously"
          className="flex items-center gap-3 text-gray-900 hover:text-gray-600 w-fit group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube />
          <span className="group-hover:underline">Sriniously on YouTube</span>
        </a>
        <YouTubeEmbed embedId="0Rwb4Xmlcwc" />
      </div>
    ),
  },
  {
    title: "I write stuff sometimes",
    content: (
      <Link
        href="/blog"
      >
        <PenTool className="w-60 h-60" />
      </Link>
    ),
  },
  {
    title: "I have spoken at tech conferences",
    content: <YouTubeEmbed embedId="1VIZFA3QqFQ" />,
  },
  {
    title: "I have built stuff",
    content: (
      <div className="flex flex-col gap-20">
        <a
          href="https://github.com/sriniously"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="w-48 h-48" />
        </a>
        <a
          href="https://www.producthunt.com/@srini53168"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaProductHunt className="w-48 h-48" />
        </a>
      </div>
    ),
  },
];

const HomePage = () => {
  return (
    <div className="min-h-[80vh]">
      <h1 className="text-4xl font-semibold mb-8">Hi, I'm Srini</h1>

      <div className="mt-32">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default HomePage;
