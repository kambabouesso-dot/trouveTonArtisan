// Affiche une note sur 5 sous forme d'étoiles, accessible aux lecteurs d'écran
function StarRating({ note = 0, max = 5 }) {
  const rounded = Math.round(note);

  return (
    <div className="star-rating" role="img" aria-label={`Note : ${note} sur ${max}`}>
      {Array.from({ length: max }, (_, index) => (
        <span key={index} aria-hidden="true" className={index < rounded ? 'star star--filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
