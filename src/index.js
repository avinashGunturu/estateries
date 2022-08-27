import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FavListContext from './context/FavListContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FavListContext>
    <App />
    </FavListContext>
    </BrowserRouter>
  </React.StrictMode>
);

