import { Link } from 'react-router-dom';
import StarRating from './StarRating.jsx';

function ArtisanCard({ artisan }) {
  return (
    <Link to={`/artisans/${artisan.id}`} className="artisan-card card h-100 text-decoration-none">
      <div className="card-body">
        <h3 className="card-title h5">{artisan.nom}</h3>
        <StarRating note={Number(artisan.note)} />
        <p className="card-text mb-1">{artisan.Specialite?.nom}</p>
        <p className="card-text text-muted mb-0">{artisan.localisation}</p>
      </div>
    </Link>
  );
}

export default ArtisanCard;
