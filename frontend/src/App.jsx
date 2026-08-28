import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ArtisanList from './pages/ArtisanList.jsx';
import ArtisanDetail from './pages/ArtisanDetail.jsx';
import LegalPage from './pages/LegalPage.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<ArtisanList />} />
          <Route path="/artisans/:id" element={<ArtisanDetail />} />
          <Route path="/mentions-legales" element={<LegalPage title="Mentions légales" />} />
          <Route path="/donnees-personnelles" element={<LegalPage title="Données personnelles" />} />
          <Route path="/accessibilite" element={<LegalPage title="Accessibilité" />} />
          <Route path="/cookies" element={<LegalPage title="Cookies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
