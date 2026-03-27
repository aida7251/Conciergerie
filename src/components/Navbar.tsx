export default function Navbar() {
  return (
    <nav className="w-full bg-[#F5F3EF] px-10 py-4 flex items-center justify-between shadow-sm fixed top-0 z-50">

      {/* LOGO */}
      <div className="text-xl font-bold">
        <span className="text-[#1F3D37]">Logo</span>{" "}
        <span className="text-[#1A1A1A]">Logo</span>
      </div>

      {/* MENU */}
      <div className="flex items-center gap-8 text-[#1A1A1A] text-sm font-medium">
        <a href="#" className="hover:text-[#F4C542] transition duration-300">
          Services
        </a>
        <a href="#" className="hover:text-[#F4C542] transition duration-300">
          À propos
        </a>
        <a href="#" className="hover:text-[#F4C542] transition duration-300">
          Contact
        </a>
        <a href="#" className="hover:text-[#F4C542] transition duration-300">
          Nous rejoindre
        </a>
        <a href="#" className="hover:text-[#F4C542] transition duration-300">
          Voyageur
        </a>
      </div>

      {/* BOUTON CTA */}
      <button className="bg-[#F4C542] text-[#1A1A1A] px-5 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
        Estimer mon bien
      </button>

    </nav>
  );
}