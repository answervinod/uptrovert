import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error('Rendering error:', error);
  document.getElementById('root').innerHTML = '<div>Error loading application</div>';
}

// Add error logging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});
