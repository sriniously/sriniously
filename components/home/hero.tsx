"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

const qualities = [
  {
    text: "💻 engineer",
    subtext: "✅",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "💭 dreamer",
    subtext: "✅",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "☕️ coffee addict",
    subtext: "(proudly)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "💪🏼 fitness freak",
    subtext: "(soon enough)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "📚 avid reader",
    subtext: "(self proclaimed)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "💍 husband",
    subtext: "(If she says yes)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "🍼 father",
    subtext: "(some day if I am lucky enough)",
    initial: "hidden",
    animate: "visible",
  },
];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const qualityVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const checkedVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main>
      <motion.h1
        className={cn(
          poppins.className,
          "flex items-center font-bold text-4xl lg:text-6xl gap-4 lg:gap-8"
        )}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={textVariants}>HI,</motion.span>
        <motion.span variants={textVariants}>I&apos;M SRINI</motion.span>
      </motion.h1>

      <motion.div className="mt-10 flex flex-col lg:flex-row items-start gap-10">
        <motion.div
          className="lg:w-[400px] w-full lg:h-[700px] h-[500px] relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/hero.jpg"
            alt="Srini"
            layout="fill"
            className="object-cover rounded-2xl"
          />
        </motion.div>

        <motion.ul
          className="text-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {qualities.map((quality, index) => (
            <motion.li
              key={index}
              variants={qualityVariants}
              className="mt-2 flex gap-2"
            >
              <motion.span
                initial={quality.initial}
                animate={quality.animate}
                variants={checkedVariants}
              >
                <span className="text-base text-stone-700">{quality.text}</span>
              </motion.span>
              <motion.span
                initial="hidden"
                animate={quality.animate}
                variants={checkedVariants}
                className={cn(
                  "text-xs mt-1",
                  quality.subtext !== "✅" && "gradient-text"
                )}
              >
                {quality.subtext}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </main>
  );
};

export default Hero;
