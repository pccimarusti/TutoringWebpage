import { Variants } from "framer-motion";

// Fade In Animation (Commonly used for text & elements appearing from below)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Slide In from Right Animation (Used for images & elements sliding in)
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Staggered Animation Container (For multiple items appearing in sequence)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Smooth Scaling Animation (For buttons and interactive elements)
export const smoothScale: Variants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

// Floating Animation (For technologies or icons hovering)
export const floating: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};
