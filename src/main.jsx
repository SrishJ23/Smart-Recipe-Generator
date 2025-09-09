
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './responsive-overrides.css';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
)
