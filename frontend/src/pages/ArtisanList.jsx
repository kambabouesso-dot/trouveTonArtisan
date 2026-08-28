import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArtisanCard from '../components/ArtisanCard.jsx';
import { getArtisans } from '../services/api';

function ArtisanList() {
  const [searchParams] = useSearchParams();
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categorieId = searchParams.get('categorieId') || undefined;
  const recherche = searchParams.get('recherche') || undefined;

  useEffect(() => {
    setLoading(true);
    setError(null);
    getArtisans({ ...(categorieId && { categorieId }), ...(recherche && { recherche }) })
      .then(setArtisans)
      .catch(() => setError('Impossible de charger la liste des artisans.'))
      .finally(() => setLoading(false));
  }, [categorieId, recherche]);

  return (
    <section className="artisan-list container py-5">
      <Helmet>
        <title>Liste des artisans - Trouve ton artisan !</title>
        <meta name="description" content="Parcourez la liste des artisans de la région Auvergne-Rhône-Alpes." />
      </Helmet>

      <h1 className="h3 mb-4">Liste des artisans trouvés</h1>

      {loading && <p>Chargement des artisans...</p>}
      {error && <p role="alert" className="text-danger">{error}</p>}
      {!loading && !error && artisans.length === 0 && <p>Aucun artisan ne correspond à votre recherche.</p>}

      <div className="row g-4">
        {artisans.map((artisan) => (
          <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
            <ArtisanCard artisan={artisan} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtisanList;
