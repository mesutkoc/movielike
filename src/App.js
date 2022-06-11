import React from 'react';
import './App.scss';
import Body from './Body/Body';
import Header from "./Header/Header"
import { useMovie } from './Context/MovieContext';
import { useGenre } from './Context/GenresContext';
import GenresFilters from './Header/GenresFilters';

function App() {
  const { movie } = useMovie();
  const { genre } = useGenre();

  return (
    <div className="App">
      <Header />
      <GenresFilters genre={genre}></GenresFilters>
      <Body movie={movie}/>
    </div>
  );
}

export default App;
