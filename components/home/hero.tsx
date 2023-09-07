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
    text: "👽 Alien believer",
    subtext: "(Because I've seen them at family dinners)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "💭 Imaginary Schwarzenegger",
    subtext: "(My biceps are huge in the Matrix)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "💡 Open Source Romantic",
    subtext: "(Believes in free love and free code)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "⚙️ Next.js Oracle",
    subtext: "(It's not just a framework, it's a prophecy)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "📘 TypeScript Poet",
    subtext: "(Where typings are my verses)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "🎩 Hat Connoisseur",
    subtext: "(Wearing many, but mostly metaphorical ones)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "🎢 Emotional Roller-coaster Engineer",
    subtext: "(Crafting highs and lows in code and life)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "🌪️ Refactor Tornado",
    subtext: "(Turning messy code into... a different kind of mess)",
    initial: "hidden",
    animate: "visible",
  },
  {
    text: "⏳ Procrastination Guru",
    subtext: "(I'll write a better subtext later)",
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
          "flex items-center font-bold text-3xl lg:text-6xl gap-4 lg:gap-8"
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
          className="lg:w-[400px] w-full lg:h-[500px] h-[500px] relative"
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
              className="mt-2 flex flex-col lg:flex-row lg:gap-2"
            >
              <motion.span
                initial={quality.initial}
                animate={quality.animate}
                variants={checkedVariants}
              >
                <span className="text-xs lg:text-sm text-stone-700">
                  {quality.text}
                </span>
              </motion.span>
              <motion.span
                initial="hidden"
                animate={quality.animate}
                variants={checkedVariants}
                className="text-xs lg:mt-2 ml-4 lg:ml-0 gradient-text"
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
