import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/Jb (2).png"
import { useAppDispatch, useAppSelector } from "../store/store"
import { toggleMobileMenu } from "../store/uislice"

interface NavbarProps {
  navItems?: string[]
}

const Navbar: React.FC<NavbarProps> = ({
  navItems = ["Home", "About", "Tech", "Projects", "Certifications", "Experiences", "Contact"],
}) => {
  const isOpen = useAppSelector((state) => state.ui.isMobileMenuOpen)
  const dispatch = useAppDispatch()
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const toggleMenu = () => {
    dispatch(toggleMobileMenu())
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-black fixed w-full left-0 h-24 z-10 px-5 transition-all">
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
      <ul className="hidden lg:flex lg:flex-row text-xl relative space-x-8">
        {navItems.map((item) => (
          <li key={item} className="relative group">
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={700}
              offset={-180}
              spy={false}
              activeClass="active-link"
              onSetActive={(to: string) => {
                window.history.replaceState(null, "", `#${to}`)
              }}
              className="cursor-pointer hover:text-cyan-500 transition-colors text-2xl"
              onClick={toggleMenu}
            >
              {item}
            </Link>

            {/* Active Indicator */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-cyan-500"
              layoutId="underline"
              initial={false}
              animate={{ width: item === "active-link" ? "100%" : "0%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 180, damping: 20 },
              opacity: { duration: 0.4, ease: "easeIn" },
            }}
            className="fixed inset-0 bg-black bg-opacity-95 text-white flex flex-col items-center justify-center space-y-10 text-3xl z-10 overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={700}
                offset={-180}
                spy={false}
                activeClass="active-link"
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
  )
}

export default Navbar;