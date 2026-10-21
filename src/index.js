import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registra o service worker para a aplicação funcionar como PWA
// (pode ser instalada e carrega mais rápido / offline)
serviceWorkerRegistration.register();

reportWebVitals();
