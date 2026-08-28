const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
const API_KEY = import.meta.env.VITE_API_KEY;

// NB : une clé statique embarquée dans le bundle front ne peut pas être un secret absolu
// (elle reste extractible côté client) ; elle est combinée à la restriction CORS côté API
// pour limiter l'usage de l'API au site officiel.
async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `Erreur ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
}

export const getCategories = () => request('/categories');

export const getArtisans = (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return request(`/artisans${query ? `?${query}` : ''}`);
};

export const getArtisansOfTheMonth = () => request('/artisans/du-mois');

export const getArtisanById = (id) => request(`/artisans/${id}`);

export const sendContactMessage = (id, payload) => request(`/artisans/${id}/contact`, {
  method: 'POST',
  body: JSON.stringify(payload),
});
