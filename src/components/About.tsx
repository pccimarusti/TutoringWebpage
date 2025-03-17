import React from "react";
import aboutImg from "../assets/about-me.jpg";
import { ABOUT_TEXT, ABOUT_TEXT1 } from "../constants";
import { motion } from "framer-motion";
import { fadeInUp, slideInRight } from "../constants/animations";

/**
 * About Component
 * 
 * This component renders the About section of the website, including:
 * - Animated heading
 * - Description text
 * - Profile image (with animations)
 */

const About: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 scroll-mt-48" id="about">
      {/* Section Heading */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-bold text-gradient bg-gradient-to-r from-accent via-blue-500 to-cyan-500 bg-clip-text text-transparent"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center">
        {/* Profile Image with Animation */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <motion.img
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1.2 }}
            src={aboutImg}
            alt="About Jackson Bryant"
            className="rounded-2xl shadow-lg h-3/4 transition-transform hover:scale-105 duration-300"
          />
        </motion.div>

        {/* About Text Description */}
        <div className="w-full lg:w-1/2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center lg:justify-start items-center lg:items-start"
          >
            <p className="my-2 max-w-xl py-6 text-xl font-light tracking-tight text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
            <p className="my-2 max-w-xl py-6 text-xl font-light tracking-tight text-center lg:text-left">
              {ABOUT_TEXT1}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;