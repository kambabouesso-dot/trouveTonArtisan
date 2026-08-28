import { Helmet } from 'react-helmet-async';

// Pages légales volontairement vides, à compléter ultérieurement par un cabinet spécialisé
function LegalPage({ title }) {
  return (
    <section className="container py-5">
      <Helmet>
        <title>{title} - Trouve ton artisan !</title>
      </Helmet>
      <h1 className="h3">{title}</h1>
      <p>Page en construction.</p>
    </section>
  );
}

export default LegalPage;
