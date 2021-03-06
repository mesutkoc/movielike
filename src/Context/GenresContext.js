import { createContext, useContext, useEffect, useState } from "react";
import getGenres from "../Requests/GenresRequest";

const GenresContext = createContext();

export const GenreProvider = ({ children }) => {

    const [genre, setGenre] = useState([]);
    const values = {
        genre,
        setGenre
    }
    useEffect(() => {
        getGenres().then(res => setGenre(res?.data))
    }, [])
    return <GenresContext.Provider value={values} >{children}</GenresContext.Provider>
};
export const useGenre = () => useContext(GenresContext);