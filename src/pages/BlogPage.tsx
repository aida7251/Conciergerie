import SEO from "../components/SEO/SEO";

const articles = [
  {
    title: "Comment maximiser ses revenus Airbnb",
    content:
      "Optimisez vos prix, utilisez des photos professionnelles et améliorez vos avis pour augmenter vos revenus.",
  },
  {
    title: "Les erreurs à éviter",
    content:
      "Ne négligez pas le ménage, la communication et la qualité des photos.",
  },
  {
    title: "Airbnb vs Booking",
    content:
      "Airbnb offre plus de visibilité, Booking plus de volume.",
  },
  {
    title: "Pourquoi une conciergerie",
    content:
      "Gain de temps, optimisation et tranquillité.",
  },
];

export default function BlogPage() {
  return (
    <> <SEO
  title="Blog AMAFA | Conseils Airbnb, Immobilier et Sénégal"
  description="Retrouvez nos conseils sur la location Airbnb, la gestion locative, l'investissement immobilier et le suivi de chantier au Sénégal."
  canonical="https://amafa-conciergerie.com/blog"
/> 
    
    <div className="bg-[#F5F3EF] min-h-screen py-20 px-10">

      <h1 className="text-4xl font-bold text-center mb-16">
        Blog & Conseils
      </h1>

      <div className="max-w-4xl mx-auto space-y-12">

        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4">
              {article.title}
            </h2>
            <p className="text-gray-600">
              {article.content}
            </p>
          </div>
        ))}

      </div>

    </div>
  </>);
}