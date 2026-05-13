import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JoinPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="h-[50vh] bg-black text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">Nous rejoindre</h1>
      </div>

      <div className="py-20 px-10 max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Rejoignez notre réseau
        </h2>

        <p className="text-gray-600 mb-6">
          Vous êtes propriétaire ou prestataire ? Rejoignez-nous et développez votre activité avec nous.
        </p>

        <button className="bg-[#F4C542] px-6 py-3 rounded-lg">
          Nous contacter
        </button>

      </div>

      <Footer />
    </>
  );
}