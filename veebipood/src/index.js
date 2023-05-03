import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// 1. npm install react-router-dom -> võtab vajalikud failid internetist
// 2. panen index.js faili BrowserRouteri -> võimaldab navigeerida
// 3. App.js faili ja looma seosed URLi ja sisu vahel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

