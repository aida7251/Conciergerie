import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      {/* LOGO */}
     <img
  src="/logo-amafa.png"
  alt="AMAFA Conciergerie"
  className="h-24 w-auto scale-150 object-contain hover:scale-[1.6] transition duration-300"
/>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-8 items-center">

        <Link className="hover:text-[#F4C542] transition" to="/">
          Accueil
        </Link>

        {/* DROPDOWN SERVICES */}
        <div
          className="relative"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="cursor-pointer hover:text-[#F4C542]">
            Services
          </span>

          <AnimatePresence>
            {dropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg p-4 w-52"
              >
                <Link to="/services" className="block py-2 hover:text-[#F4C542]">
                  Tous les services
                </Link>
                <Link to="/services#menage" className="block py-2 hover:text-[#F4C542]">
                  Ménage
                </Link>
                <Link to="/services#annonce" className="block py-2 hover:text-[#F4C542]">
                  Annonces
                </Link>
                <Link to="/services#photo" className="block py-2 hover:text-[#F4C542]">
                  Shooting photo
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link className="hover:text-[#F4C542]" to="/about">
          À propos
        </Link>

        <Link className="hover:text-[#F4C542]" to="/contact">
          Contact
        </Link>

        <Link className="hover:text-[#F4C542]" to="/join">
          Nous rejoindre
        </Link>

        {/* CTA */}
        <Link
          to="/estimation"
          className="bg-[#F4C542] text-black px-5 py-2 rounded-xl hover:scale-105 transition"
        >
          Estimer
        </Link>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white text-black p-6 flex flex-col gap-6 z-50"
          >
            <button
              className="self-end text-xl"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">À propos</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/join">Nous rejoindre</Link>

            <Link
              to="/estimation"
              className="bg-[#F4C542] px-4 py-2 rounded-lg text-center"
            >
              Estimer mes revenus
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}