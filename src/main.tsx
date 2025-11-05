// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Service worker registration helper from vite-plugin-pwa
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onOfflineReady() {
    // called when the SW has finished precaching and app is ready to work offline
    console.log('App ready to work offline');
  },
  onNeedRefresh() {
    console.log('New content available — please refresh.');
    // You can show a toast to the user to refresh and call updateSW(true) to reload
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
