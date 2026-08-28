import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-4 d-flex flex-wrap justify-content-between gap-4">
        <nav aria-label="Pages légales">
          <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
            <li><Link to="/accessibilite">Accessibilité</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </nav>

        <address className="mb-0 fst-normal">
          Région Auvergne-Rhône-Alpes<br />
          101 cours Charlemagne<br />
          CS 20033<br />
          69269 Lyon Cedex 02, France<br />
          <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
