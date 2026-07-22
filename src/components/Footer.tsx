import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "33609886595";
const CONTACT_EMAIL = "amafaconciergerie@gmail.com";

export default function Footer() {
  return (
    <footer className="bg-[#1F3D37] text-white pt-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10">

          {/* ENTREPRISE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-amafa.png"
                alt="AMAFA Conciergerie"
                className="h-10 w-auto object-contain"
              />
              <h3 className="text-xl font-bold">AMAFA</h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
  AMAFA Conciergerie accompagne les propriétaires avec un service de
  conciergerie Airbnb et de suivi de chantier à Dakar et partout au
  Sénégal.
</p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4C542] hover:text-[#1A1A1A] transition"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4C542] hover:text-[#1A1A1A] transition"
              >
                ig
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F4C542] hover:text-[#1A1A1A] transition"
              >
                wa
              </a>
            </div>
          </div>

          {/* NOS SERVICES */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F4C542] text-sm uppercase tracking-wide">
              Nos services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/services" className="hover:text-[#F4C542] transition">
                 Conciergerie Airbnb
                </Link>
              </li>
              <li>
                <Link to="/chantier" className="hover:text-[#F4C542] transition">
                  Suivi de chantier au sénégal
                </Link>
              </li>
              <li>
                <Link to="/estimation" className="hover:text-[#F4C542] transition">
                  Estimer mes revenus
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F4C542] transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#F4C542] transition">
                  Nos conseils
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-[#F4C542] transition">
                  Nous rejoindre
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F4C542] text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-[#F4C542] transition break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F4C542] transition"
                >
                  06 09 88 65 95 (WhatsApp)
                </a>
              </li>
              <li>Basés à Dakar, Sénégal</li>
              <li className="text-white/50 text-xs pt-2">
                Disponible 7j/7, réponse sous 24h
              </li>
              <li className="text-white/50 text-xs">
  Conciergerie Airbnb • Suivi de chantier • Dakar • Sénégal
</li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-[#F4C542] text-[#1A1A1A] text-sm font-semibold px-5 py-2.5 rounded-xl hover:scale-105 transition"
            >
              Nous écrire
            </Link>
          </div>

          {/* LIENS LEGAUX */}
          <div>
            <h4 className="font-semibold mb-4 text-[#F4C542] text-sm uppercase tracking-wide">
              Informations légales
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/mentions-legales" className="hover:text-[#F4C542] transition">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="hover:text-[#F4C542] transition">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgu" className="hover:text-[#F4C542] transition">
                  Conditions générales d'utilisation
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BAS */}
        <div className="border-t border-white/10 mt-12 pt-6 pb-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <p>© {new Date().getFullYear()} AMAFA Conciergerie. Tous droits réservés.</p>
          <p>Conçu pour accompagner les propriétaires et la diaspora sénégalaise.</p>
        </div>

      </div>
    </footer>
  );
}