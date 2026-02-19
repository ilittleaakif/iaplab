import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { name: "About", href: "#" },
  { name: "IAPhub", href: "#" },
  { name: "Extras", href: "#" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const baseStyles = "fixed z-50 left-0 right-0 mx-auto transition-all duration-300 ease-in-out";

  const scrollStyles = scrolled
    ? "bg-bg/80 backdrop-blur-md border-b border-white/10 shadow-lg top-0 w-full py-3 px-4 rounded-none " + // Mobile specific
    "sm:top-4 sm:max-w-xl sm:rounded-full sm:border sm:px-6"
    : "bg-transparent border-transparent top-0 max-w-7xl py-6 px-4";

  return (
    <header className={`${baseStyles} ${scrollStyles}`}>
      <div className="flex items-center justify-between w-full relative">

        {/* Logo */}
        <h1
          className={`font-logo font-extrabold text-text transition-all duration-300 ${scrolled ? "text-xl" : "text-3xl"
            }`}
        >
          iaplab
        </h1>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-6 font-cute text-lg font-bold text-text">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <button
            aria-label="Toggle Dark Mode"
            className="hover:text-accent transition-colors duration-200"
          >
            <i className="fas fa-moon text-lg"></i>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          className="sm:hidden text-2xl text-text hover:text-accent transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-0 mt-4 w-full bg-bg/95 backdrop-blur-xl border-b border-white/10 shadow-xl p-4 flex flex-col gap-3 sm:hidden origin-top"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-cute text-lg hover:text-accent hover:bg-white/5 p-2 rounded-md transition-all text-center"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full my-1" />
              <div className="flex justify-center gap-6 py-2">
                <i className="fab fa-github text-2xl transition active:text-accent"></i>
                <i className="fas fa-moon text-2xl transition active:text-accent"></i>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;