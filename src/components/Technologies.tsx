import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion, Variants } from "framer-motion";
import { staggerContainer } from "../constants/animations";

/**
 * Technologies Component
 * 
 * This component renders the Technologies section of the website, including:
 * - Animated heading
 * - Display of technology icons with enhanced hover animations
 */

// Define the types for each icon item
interface TechIcon {
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
  label: string;
  duration: number;
}

// Function to handle individual icon animations
const iconVariants = (duration: number): Variants => ({
  initial: { y: -8, scale: 0.95 },
  animate: {
    y: [0, -10, 0],
    scale: [0.95, 1.05, 0.95],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
});

// Array of technology icons and their details
const techIcons: TechIcon[] = [
  { Icon: RiReactjsLine, color: "text-[#61DBFB]", label: "React", duration: 2.5 },
  { Icon: TbBrandNextjs, color: "", label: "Next.js", duration: 3 },
  { Icon: FaCss3Alt, color: "text-[#3C99DC]", label: "CSS3", duration: 5 },
  { Icon: FaHtml5, color: "text-orange-500", label: "HTML5", duration: 2 },
  { Icon: RiTailwindCssFill, color: "text-[#38B2AC]", label: "Tailwind CSS", duration: 6 },
  { Icon: SiMongodb, color: "text-green-500", label: "MongoDB", duration: 4 },
  { Icon: FaNodeJs, color: "text-[#68A063]", label: "Node.js", duration: 3.5 },
  { Icon: SiExpress, color: "", label: "Express.js", duration: 4.5 },
];

const Technologies: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 scroll-mt-48 -z-10" id="tech">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl text-white bg-clip-text text-transparent font-sans"
      >
        Technologies
      </motion.h2>

      {/* Technology Icons Container */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {techIcons.map(({ Icon, color, label, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue p-[2px] hover:shadow-[0_0_15px_rgba(56,178,172,0.7)] transition-all"
            aria-label={label}
          >
            {/* Technology Icon */}
            <div className="flex items-center justify-center rounded-2xl bg-neutral-900 p-4">
              <Icon className={`text-7xl ${color}`} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;