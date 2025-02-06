import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

if (process.env.NODE_ENV === 'development') {
  console.log('App mounting in development mode');
}

try {
  root.render(<App />);
} catch (error) {
  console.error('Rendering failed:', error);
  container.innerHTML = '<div style="padding: 20px;">Failed to load application</div>';
}