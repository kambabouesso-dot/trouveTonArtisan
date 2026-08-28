import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StarRating from '../components/StarRating.jsx';
import { getArtisanById, sendContactMessage } from '../services/api';

const initialFormState = { nom: '', email: '', objet: '', message: '' };

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setArtisan(null);
    setNotFound(false);
    getArtisanById(id)
      .then(setArtisan)
      .catch(() => setNotFound(true));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(id, form);
      setStatus('success');
      setForm(initialFormState);
    } catch {
      setStatus('error');
    }
  };

  if (notFound) {
    return (
      <section className="container py-5">
        <p>Cet artisan n'existe pas.</p>
        <Link to="/artisans">Retour à la liste des artisans</Link>
      </section>
    );
  }

  if (!artisan) {
    return <p className="container py-5">Chargement de la fiche artisan...</p>;
  }

  return (
    <section className="artisan-detail container py-5">
      <Helmet>
        <title>{artisan.nom} - Trouve ton artisan !</title>
        <meta name="description" content={`Fiche artisan de ${artisan.nom}, ${artisan.Specialite?.nom} à ${artisan.localisation}.`} />
      </Helmet>

      <div className="row g-4">
        <div className="col-12 col-lg-6">
          {artisan.image && <img src={artisan.image} alt={artisan.nom} className="img-fluid rounded mb-3" />}
          <h1 className="h3">{artisan.nom}</h1>
          <StarRating note={Number(artisan.note)} />
          <p className="mb-1">{artisan.Specialite?.nom}</p>
          <p className="text-muted">{artisan.localisation}</p>

          <h2 className="h5 mt-4">À propos</h2>
          <p>{artisan.aPropos}</p>

          {artisan.siteWeb && (
            <a href={artisan.siteWeb} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              Site internet
            </a>
          )}
        </div>

        <div className="col-12 col-lg-6">
          <h2 className="h5">Contacter {artisan.nom}</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Nom</label>
              <input id="nom" name="nom" type="text" className="form-control" required maxLength={100} value={form.nom} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" name="email" type="email" className="form-control" required value={form.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="objet" className="form-label">Objet</label>
              <input id="objet" name="objet" type="text" className="form-control" required maxLength={150} value={form.objet} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-control" rows="5" required maxLength={2000} value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            <div aria-live="polite" className="mt-3">
              {status === 'success' && <p className="text-success mb-0">Votre message a bien été envoyé.</p>}
              {status === 'error' && <p className="text-danger mb-0">Une erreur est survenue, veuillez réessayer.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ArtisanDetail;
