import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import illustration from '../assets/404.png';

function NotFound() {
  return (
    <section className="not-found container py-5 text-center">
      <Helmet>
        <title>Page non trouvée - Trouve ton artisan !</title>
      </Helmet>
      <img src={illustration} alt="" className="img-fluid mb-4" style={{ maxWidth: '320px' }} />
      <h1 className="h3">Page non trouvée</h1>
      <p>La page que vous avez demandée n'existe pas ou plus.</p>
      <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
    </section>
  );
}

export default NotFound;
