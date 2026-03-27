import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Maximiser ses revenus Airbnb",
    description: "Découvrez comment augmenter vos revenus locatifs.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    link: "https://www.airbnb.fr/resources/hosting-homes/a/maximize-earnings-123",
  },
  {
    title: "Les erreurs à éviter",
    description: "Évitez les pièges fréquents en location.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    link: "https://www.lodgify.com/blog/fr/erreurs-location-saisonniere/",
  },
  {
    title: "Airbnb vs Booking",
    description: "Quelle plateforme choisir ?",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    link: "https://www.airdna.co/blog/airbnb-vs-booking",
  },
  {
    title: "Pourquoi une conciergerie",
    description: "Les avantages d’un service professionnel.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    link: "https://www.hostaway.com/blog/property-management-benefits/",
  },
  {
    title: "Revenus à Lyon",
    description: "Combien rapporte un bien à Lyon ?",
    image: "https://images.unsplash.com/photo-1472220625704-91e1462799b2",
    link: "https://www.airdna.co/vacation-rental-data/app/france/lyon",
  },
  {
    title: "Avis 5 étoiles",
    description: "Comment obtenir de meilleurs avis.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    link: "https://www.airbnb.fr/resources/hosting-homes/a/how-to-get-5-star-reviews-44",
  },
];

export default function BlogPreview() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F5F3EF] py-24 px-10">

      <div className="text-center mb-16">
        <div className="animated-line mx-auto mb-4"></div>
        <h2 className="text-4xl font-bold">
          Nos conseils
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
          >

            {/* IMAGE */}
            <img
              src={blog.image}
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {blog.description}
              </p>

              <span className="text-[#F4C542] font-semibold">
                Lire l’article →
              </span>
            </div>

          </a>
        ))}

      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/blog")}
          className="bg-[#F4C542] px-6 py-3 rounded-lg"
        >
          Voir plus
        </button>
      </div>

    </section>
  );
}