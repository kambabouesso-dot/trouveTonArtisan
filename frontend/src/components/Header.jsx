import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { getCategories } from '../services/api';

function Header() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Le menu est alimenté depuis la base de données (table categories)
    getCategories().then(setCategories).catch(() => setCategories([]));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/artisans?recherche=${encodeURIComponent(search.trim())}`);
  };

  return (
    <header className="site-header">
      <div className="container d-flex flex-wrap align-items-center gap-3 py-2">
        <Link to="/" className="site-header__logo" aria-label="Trouve ton artisan, retour à l'accueil">
          <img src={logo} alt="Trouve ton artisan ! Avec la région Auvergne-Rhône-Alpes" height="48" />
        </Link>

        <nav aria-label="Catégories d'artisanat" className="flex-grow-1">
          <ul className="site-header__nav list-unstyled d-flex flex-wrap gap-3 mb-0">
            {categories.map((categorie) => (
              <li key={categorie.id}>
                <Link to={`/artisans?categorieId=${categorie.id}`}>{categorie.nom}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <form role="search" className="site-header__search d-flex" onSubmit={handleSearch}>
          <label htmlFor="artisan-search" className="visually-hidden">Rechercher un artisan par nom</label>
          <input
            id="artisan-search"
            type="search"
            className="form-control"
            placeholder="Rechercher un artisan..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" className="btn btn-primary ms-2">Rechercher</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
