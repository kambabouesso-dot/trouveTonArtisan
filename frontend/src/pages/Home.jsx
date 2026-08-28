import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ArtisanCard from '../components/ArtisanCard.jsx';
import { getArtisansOfTheMonth } from '../services/api';

const steps = [
  "Choisir la catégorie d'artisanat dans le menu.",
  'Choisir un artisan.',
  'Le contacter via le formulaire de contact.',
  'Une réponse sera apportée sous 48h.',
];

function Home() {
  const [artisans, setArtisans] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArtisansOfTheMonth()
      .then(setArtisans)
      .catch(() => setError('Impossible de charger les artisans du mois pour le moment.'));
  }, []);

  return (
    <>
      <Helmet>
        <title>Accueil - Trouve ton artisan !</title>
        <meta name="description" content="Trouvez un artisan de la région Auvergne-Rhône-Alpes en quelques clics et contactez-le directement." />
      </Helmet>

      <section className="how-it-works container py-5" aria-labelledby="how-it-works-title">
        <h1 id="how-it-works-title" className="h3 mb-4">Comment trouver mon artisan ?</h1>
        <ol className="how-it-works__list list-unstyled row g-3">
          {steps.map((step, index) => (
            <li key={step} className="col-12 col-md-6 col-lg-3">
              <div className="how-it-works__step h-100 p-3">
                <span className="how-it-works__number" aria-hidden="true">{index + 1}</span>
                <p className="mb-0">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="featured-artisans container pb-5" aria-labelledby="featured-artisans-title">
        <h2 id="featured-artisans-title" className="h4 mb-4">Les artisans du mois</h2>
        {error && <p role="alert" className="text-danger">{error}</p>}
        <div className="row g-4">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
