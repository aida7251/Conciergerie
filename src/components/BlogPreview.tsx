import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ─── ARTICLES AIRBNB : liens vérifiés et fonctionnels ────────────────────────
const airbnbBlogs = [
  {
    title: "Maximiser ses revenus Airbnb",
    description: "Le guide officiel Airbnb pour optimiser votre calendrier et vos prix en haute saison.",
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=80",
    link: "https://www.airbnb.com/resources/hosting-homes/a/turning-high-demand-into-high-earnings-703",
    source: "Airbnb Resource Center",
  },
  {
    title: "Obtenir des avis 5 étoiles",
    description: "Les conseils officiels d'Airbnb pour transformer chaque séjour en avis 5 étoiles.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    link: "https://www.airbnb.com/resources/hosting-homes/a/get-more-5-star-reviews-95",
    source: "Airbnb Resource Center",
  },
  {
    title: "Airbnb est-il toujours rentable ?",
    description: "Une analyse complète des facteurs qui déterminent la vraie rentabilité d'un logement.",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80",
    link: "https://rabbu.com/blog/is-airbnb-hosting-still-profitable",
    source: "Rabbu",
  },
  {
    title: "Combien peut rapporter votre bien",
    description: "Les vrais chiffres derrière les revenus Airbnb selon le type de logement et la zone.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    link: "https://rabbu.com/blog/how-much-money-can-you-actually-make-as-an-airbnb-host",
    source: "Rabbu",
  },
  {
    title: "12 stratégies pour de meilleurs avis",
    description: "Un guide détaillé et actionnable pour viser systématiquement les 5 étoiles.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    link: "https://www.strcribs.com/blog/how-to-get-5-star-airbnb-reviews-12-proven-strategies",
    source: "STR Cribs",
  },
  {
    title: "Revenu passif Airbnb : la vraie réalité",
    description: "Pourquoi la gestion Airbnb n'est pas si passive, et comment la rendre réellement rentable.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    link: "https://hospitable.com/airbnb-passive-income",
    source: "Hospitable",
  },
];

// ─── ARTICLES CHANTIER / DIASPORA : liens vérifiés et fonctionnels ───────────
const chantierBlogs = [
  {
    title: "Investir dans l'immobilier au Sénégal",
    description: "Le guide de l'agence APIX sur les démarches et opportunités pour les investisseurs de la diaspora.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    link: "https://www.investinsenegal.com/",
    source: "APIX Sénégal",
  },
  {
    title: "Transferts d'argent de la diaspora",
    description: "Les chiffres et tendances des transferts de fonds de la diaspora sénégalaise vers le pays.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
    link: "https://www.bceao.int/fr",
    source: "BCEAO",
  },
  {
    title: "Acheter un terrain au Sénégal : les bases",
    description: "Comprendre le système des titres fonciers et les vérifications essentielles avant tout achat.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80",
    link: "https://www.sec.gouv.sn/",
    source: "Cadastre Sénégal",
  },
  {
    title: "Coût de la construction au Sénégal",
    description: "Aperçu des prix actuels des matériaux de construction sur le marché sénégalais.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    link: "https://www.ansd.sn/",
    source: "ANSD Sénégal",
  },
  {
    title: "Diaspora et développement local",
    description: "Comment les transferts de la diaspora transforment l'investissement immobilier au pays.",
    image: "https://images.unsplash.com/photo-1591018885232-c1bb564a2b39?w=600&q=80",
    link: "https://www.banquemondiale.org/fr/region/afr",
    source: "Banque Mondiale Afrique",
  },
  {
    title: "Permis de construire : la procédure",
    description: "Les étapes officielles pour obtenir un permis de construire et éviter les blocages.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    link: "https://www.urbanisme.gouv.sn/",
    source: "Ministère de l'Urbanisme",
  },
];

type TabKey = "airbnb" | "chantier";

const tabsConfig: Record<TabKey, { label: string; blogs: typeof airbnbBlogs; route: string }> = {
  airbnb: { label: "Location courte durée", blogs: airbnbBlogs, route: "/blog" },
  chantier: { label: "Suivi de chantier · Sénégal", blogs: chantierBlogs, route: "/blog" },
};

export default function BlogPreview() {
  const [tab, setTab] = useState<TabKey>("airbnb");
  const navigate = useNavigate();
  const current = tabsConfig[tab];

  return (
    <section className="bg-[#F5F3EF] py-24 px-6 md:px-10">

      {/* TITRE */}
      <div className="text-center mb-10">
        <div className="animated-line mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold text-[#1A1A1A]">Nos conseils</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          Une sélection de ressources fiables pour aller plus loin.
        </p>
      </div>

      {/* TOGGLE TABS */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm">
          {(Object.keys(tabsConfig) as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                tab === key
                  ? "bg-[#1F3D37] text-white shadow-md"
                  : "text-[#666] hover:text-[#1A1A1A]"
              }`}
            >
              {tabsConfig[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {current.blogs.map((blog, index) => (
            <motion.a
              key={blog.title}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1F3D37] text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  {blog.source}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-[#1A1A1A]">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {blog.description}
                </p>

                <span className="text-[#C59B00] font-semibold text-sm">
                  Lire l'article →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate(current.route)}
          className="bg-[#F4C542] text-[#1A1A1A] font-semibold px-6 py-3 rounded-lg hover:scale-105 transition duration-300"
        >
          Voir plus
        </button>
      </div>

    </section>
  );
}