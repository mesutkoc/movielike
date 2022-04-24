import React from 'react';
import './App.scss';
import Body from './Body/Body';
import Header from "./Header/Header"
import { useMovie } from './Context/MovieContext';

function App() {
  const { movie } = useMovie();

  return (
    <div className="App">
      <Header />
      <Body movie={movie}/>
    </div>
  );
}

export default App;
