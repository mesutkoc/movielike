import React from 'react';
import ReactDOM from 'react-dom/client';
import { MovieProvider } from './Context/MovieContext';
import { GenreProvider } from './Context/GenresContext';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BasketProvider } from './Context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MovieProvider>
    <BasketProvider>
      <GenreProvider>
        <App />
      </GenreProvider>
    </BasketProvider>

  </MovieProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
