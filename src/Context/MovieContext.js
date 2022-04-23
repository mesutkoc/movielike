import { createContext, useContext, useEffect, useState } from "react";
import getMovies from "../requests";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

    const [movie, setMovie] = useState([]);
    const values = {
        movie,
        setMovie
    }
    useEffect(() => {
        getMovies().then(res => setMovie(res?.data))
    }, [])
    return <MovieContext.Provider value={values} >{children}</MovieContext.Provider>
};
export const useMovie = () => useContext(MovieContext);