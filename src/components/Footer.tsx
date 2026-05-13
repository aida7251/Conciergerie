export default function Footer() {
  return (
    <footer className="bg-[#1F3D37] text-white py-16 px-10">

      <div className="grid md:grid-cols-4 gap-10">

        {/* ENTREPRISE */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            ALB Conciergerie
          </h3>
          <p className="text-sm text-gray-300">
            Gestion de locations courte durée à Lorient & Lyon.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm">Email : contact@onciergerie.fr</p>
          <p className="text-sm">Téléphone : 06 00 00 00 00</p>
          <p className="text-sm">Adresse : 10 rue Exemple, 56100 Lorient</p>
        </div>

        {/* INFORMATIONS */}
        <div>
          <h4 className="font-semibold mb-4">Informations</h4>
          <p className="text-sm">SIRET : 123 456 789 00012</p>
          <p className="text-sm">RCS : Lorient</p>
          <p className="text-sm">TVA : FR123456789</p>
        </div>

        {/* LIENS */}
        <div>
          <h4 className="font-semibold mb-4">Liens utiles</h4>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#F4C542] cursor-pointer">
              Mentions légales
            </li>
            <li className="hover:text-[#F4C542] cursor-pointer">
              Politique de confidentialité
            </li>
            <li className="hover:text-[#F4C542] cursor-pointer">
              CGU
            </li>
          </ul>

          {/* RESEAUX */}
          <div className="flex gap-4 mt-4">
            <span className="hover:text-[#F4C542] cursor-pointer">Facebook</span>
            <span className="hover:text-[#F4C542] cursor-pointer">Instagram</span>
            <span className="hover:text-[#F4C542] cursor-pointer">LinkedIn</span>
          </div>
        </div>

      </div>

      {/* BAS */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2026 Conciergerie - Tous droits réservés
      </div>

    </footer>
  );
}