import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const controls = useAnimation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);

      controls.start({
        width: isScrolled ? "700.47px" : "1152px",
        height: isScrolled ? "61.89px" : "93.89px",
        paddingTop: isScrolled ? 8 : 24,
        paddingBottom: isScrolled ? 8 : 24,
        paddingLeft: isScrolled ? 14 : 24,
        paddingRight: isScrolled ? 8 : 24,
        backgroundColor: isScrolled ? "#ffffff" : "rgba(255,255,255,0)", // <- fixed backgroundColor animatable
        boxShadow: isScrolled ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
        transition: { ease: "easeOut", duration: 0.2 },
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Testimonials", to: "testimonials" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center"> {/* ✅ fixed applied here */}
      <motion.nav
        animate={controls}
        className="relative w-full max-w-7xl flex items-center justify-between rounded-xl backdrop-blur-md px-4 transition-all"
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="./src/assets/Texspire Horizontal Logo.svg"
            alt="Texspire"
            className={`transition-all duration-200 ${scrolled ? "h-10" : "h-14"}`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 text-sm font-medium text-gray-700">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth
              offset={-80}
              duration={0}
              className="cursor-pointer px-1 py-2 rounded-md transition-all hover:bg-gray-100"
            >
              {name}
            </Link>
          ))}
          <a
            href="/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer px-3 py-2 rounded-md transition-all hover:bg-gray-100"
          >
            Careers
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#subscriptions"
            className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm transition"
          >
            See Plans
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[100px] left-0 w-full bg-white shadow-md z-40 px-6 py-4 space-y-4">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth
              offset={-80}
              duration={0}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 text-sm font-medium py-2 hover:bg-gray-100 rounded-md"
            >
              {name}
            </Link>
          ))}
          <a
            href="/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-700 text-sm font-medium py-2 hover:bg-gray-100 rounded-md"
          >
            Careers
          </a>
          <a
            href="#subscriptions"
            className="block w-full text-center bg-gray-900 text-white py-2 rounded-md text-sm"
            onClick={() => setMenuOpen(false)}
          >
            See Plans
          </a>
        </div>
      )}
    </div>
  );
}
