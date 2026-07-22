import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      {/* LOGO */}
      <Link to="/" aria-label="Retour à l'accueil AMAFA">
  <img
    src="/logo-amafa.png"
    alt="AMAFA - Conciergerie Airbnb à Dakar et suivi de chantier au Sénégal"
    className="h-24 w-auto scale-150 object-contain hover:scale-[1.6] transition duration-300"
  />
</Link>

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
          {/* Le mot "Services" n'est plus cliquable */}
          <span className="cursor-default select-none hover:text-[#F4C542] transition">
           Nos Services
          </span>

          <AnimatePresence>
            {dropdown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-8 left-0 bg-white text-black rounded-2xl shadow-xl p-3 w-64"
              >
                {/* ── SECTION LOCATION COURTE DURÉE ── */}
                <p className="text-[10px] uppercase tracking-[2px] text-gray-400 font-semibold px-3 pt-2 pb-1">
                  Location courte durée
                </p>

                <Link
                  to="/services"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-[#F4C542]/10 hover:text-[#C59B00] transition text-sm font-medium"
                >
       Conciergerie Airbnb à Dakar
                </Link>

                {/* ── SÉPARATEUR ── */}
                <div className="border-t border-gray-100 my-2" />

                {/* ── SECTION SUIVI CHANTIER ── */}
                <p className="text-[10px] uppercase tracking-[2px] text-gray-400 font-semibold px-3 pt-1 pb-1">
                  Suivi de chantier · Sénégal
                </p>

                <Link
                  to="/chantier"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-[#F4C542]/10 hover:text-[#C59B00] transition text-sm font-medium"
                >
                   Suivi de chantier au Sénégal
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link className="hover:text-[#F4C542] transition" to="/about">
          À propos
        </Link>

        <Link className="hover:text-[#F4C542] transition" to="/contact">
          Contact
        </Link>

        <Link className="hover:text-[#F4C542] transition" to="/join">
          Nous rejoindre
        </Link>
        <Link
    className="hover:text-[#F4C542] transition"
    to="/blog"
>
    Blog
</Link>

        {/* CTA */}
        <Link
          to="/estimation"
          className="bg-[#F4C542] text-black px-5 py-2 rounded-xl hover:scale-105 transition font-semibold"
        >
        Estimer mes revenus
        </Link>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
     <button
  onClick={() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMenuOpen(true);
  }}
>
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
          className="fixed top-0 left-0 w-screen h-screen bg-white text-black p-6 flex flex-col gap-4 z-[9999] overflow-y-auto"
          >
            <button
              className="self-end text-xl mb-2"
              // onClick={() => setMenuOpen(false)}
              onClick={() => {
  setMenuOpen(false);
  document.body.style.overflow = "";
}}
            >
              ✕
            </button>

            <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>

            <p className="text-[10px] uppercase tracking-[2px] text-gray-400 font-semibold mt-2">
              Conciergerie Airbnb
            </p>
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="pl-3 text-sm hover:text-[#F4C542] transition"
            >
                Conciergerie Airbnb à Dakar
            </Link>

            <p className="text-[10px] uppercase tracking-[2px] text-gray-400 font-semibold mt-2">
             Construction & suivi de chantier
            </p>
            <Link
              to="/chantier"
              onClick={() => setMenuOpen(false)}
              className="pl-3 text-sm hover:text-[#F4C542] transition"
            >
                Suivi de chantier au Sénégal
            </Link>

            <div className="border-t border-gray-100 my-1" />

            <Link to="/about"    onClick={() => setMenuOpen(false)}>À propos</Link>
            <Link to="/contact"  onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/join"     onClick={() => setMenuOpen(false)}>Nous rejoindre</Link>

            <Link
              to="/estimation"
              onClick={() => setMenuOpen(false)}
              className="bg-[#F4C542] px-4 py-2 rounded-lg text-center font-semibold mt-2"
            >
              Estimer mes revenus
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}