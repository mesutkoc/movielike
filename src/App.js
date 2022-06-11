import React, { useState } from 'react';
import './App.scss';
import Body from './Body/Body';
import Header from "./Header/Header"
import { useMovie } from './Context/MovieContext';
import { useGenre } from './Context/GenresContext';
import GenresFilters from './Header/GenresFilters';
import Basket from './Header/Basket';

function App() {
  const { movie } = useMovie();
  const { genre } = useGenre();
  const [showGenreFilters, setGenreFiltersView] = useState(false);
  const [showBasket, setBasketView] = useState(false);

  return (
    <div className="App">
      <Header setGenreFiltersView={setGenreFiltersView} showGenreFilters={showGenreFilters} showBasket={showBasket} setBasketView={setBasketView} />
      {showGenreFilters && <GenresFilters genre={genre}></GenresFilters>}
      {showBasket && <Basket></Basket>}
      <Body movie={movie} />
    </div>
  );
}

export default App;
