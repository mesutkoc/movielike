import { createContext,useContext,useState } from "react";

const MovieContext = createContext();

export const MovieProvider =({children})=>{
    const [movie,setMovie] = useState({});
    const values = {
        movie,
        setMovie
    }

    return <MovieContext.Provider value={values} >{children}</MovieContext.Provider>
};
export const useMovie = ()=> useContext(MovieContext);