import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Body from './Body/Body';
import Header from "./Header/Header"
import { useMovie } from './Context/MovieContext';
import { useGenre } from './Context/GenresContext';
import GenresFilters from './Header/GenresFilters';
import Basket from './Header/Basket';
import Detail from './Body/DetailPage/Detail';
import CategoryPage from './Body/CategoryPage/CategoryPage';
import WatchMovie from './Body/WatchPart/WatchMovie';

function App() {
  const { movies } = useMovie();
  const { genre } = useGenre();
  const [showGenreFilters, setGenreFiltersView] = useState(false);
  const [showBasket, setBasketView] = useState(false);
  const [genrePath, setGenrePath] = useState();

  return (
    <Router>
      <div className="App">

        <Header setGenreFiltersView={setGenreFiltersView} showGenreFilters={showGenreFilters} showBasket={showBasket} setBasketView={setBasketView} />
        {showGenreFilters && <GenresFilters genre={genre}></GenresFilters>}
        {showBasket && <Basket></Basket>}
        <Routes>
          <Route path="/" exact element={<Body movies={movies} genre={genre} />} />
          <Route path={`/category/${genrePath}/details/:id`} element={<Detail />} />
          <Route path="/category/:genre" element={<CategoryPage setGenrePath={setGenrePath}/>} />
          <Route path= "/watch/:id" element={<WatchMovie/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
