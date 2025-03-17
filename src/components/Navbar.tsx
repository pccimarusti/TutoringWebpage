import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Jb (2).png";

/**
 * Navbar Component
 * - Smooth scrolling
 * - Enhanced mobile menu
 * - Improved accessibility with TypeScript
 */

interface NavbarProps {
  navItems?: string[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems = ['Home', 'About', 'Tech', 'Experiences', 'Projects', 'Contact'] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-black fixed w-full left-0 h-24 z-10 px-5">
      {/* Logo */}
      <div>
        <img className="w-20 h-20" src={logo} alt="logo" />
      </div>

      {/* Hamburger Icon */}
      <motion.div 
        className="lg:hidden text-white cursor-pointer z-20"
        onClick={toggleMenu}
      >
        <motion.div 
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-8 h-1 bg-white mb-1 rounded"
        />
        <motion.div 
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-8 h-1 bg-white mb-1 rounded"
        />
        <motion.div 
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-8 h-1 bg-white rounded"
        />
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex lg:flex-row lg:text-xl space-x-8">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={700}
              offset={isMobile ? -120 : -180}
              spy={true}
              activeClass="text-cyan-500 font-bold"
              className="cursor-pointer hover:text-cyan-500 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed inset-0 bg-black bg-opacity-95 text-white flex flex-col items-center justify-center space-y-10 text-3xl z-10"
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={700}
                offset={-180}
                spy={true}
                activeClass="text-cyan-500 font-bold"
                className="cursor-pointer hover:text-cyan-500 transition-colors text-4xl"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;