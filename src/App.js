import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routes_Const } from "./constants";
import './App.scss';
import Body from './Body/Body';
import Header from "./Header/Header"
import { useMovie } from './Context/MovieContext';
import { useGenre } from './Context/GenresContext';
import { useBasket } from './Context/BasketContext';
import GenresFilters from './Header/GenresFilters';
import Basket from './Header/Basket';
import Detail from './Body/DetailPage/Detail';
import CategoryPage from './Body/CategoryPage/CategoryPage';
import WatchMovie from './Body/WatchPart/WatchMovie';


function App() {
  const { movies } = useMovie();
  const { genre } = useGenre();
  const { basket, setBasket } = useBasket();
  const [showGenreFilters, setGenreFiltersView] = useState(false);
  const [showBasket, setBasketView] = useState(false);
  const [genrePath, setGenrePath] = useState();


  const ROUTES = {
    component1: {id: "1", path: "/", element: <Body movies={movies} genre={genre}/>},
    component2: {id: "2", path: `/${Routes_Const.CATEGORY}/${genrePath}/${Routes_Const.DETAILS}/${Routes_Const.ID}`, element: <Detail />},
    component3: {id: "3", path: `/${Routes_Const.CATEGORY}/:${Routes_Const.GENRE}/:page`, element: <CategoryPage setGenrePath={setGenrePath}/>},
    component4: {id: "4", path: `/${Routes_Const.WATCH}/${Routes_Const.ID}`, element: <WatchMovie/>},
  }

  return (
    <Router>
      <div className="App">
        <Header basket={basket} setGenreFiltersView={setGenreFiltersView} showGenreFilters={showGenreFilters} showBasket={showBasket} setBasketView={setBasketView} />
        {showGenreFilters && <GenresFilters genre={genre}></GenresFilters>}
        {showBasket && <Basket basket={basket} setBasket={setBasket}></Basket>}
        <Routes>
          {Object.entries(ROUTES).map((route) => {
            return <Route key={route[1].id} path={route[1].path} element={route[1].element}></Route>
          } )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
