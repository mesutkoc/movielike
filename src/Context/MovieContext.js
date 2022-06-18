import { createContext, useContext, useEffect, useState } from "react";
import getMovies from "../Requests/MovieRequest"

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const values = {
        movies,
        setMovies
    }
    useEffect(() => {
        getMovies().then(res => setMovies(res?.data))
    }, [])
    return <MovieContext.Provider value={values} >{children}</MovieContext.Provider>
};
export const useMovie = () => useContext(MovieContext);