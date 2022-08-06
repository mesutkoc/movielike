import axios from "axios";
import { Data_Url } from "../constants";

const getMovies = async() =>{
    const res = await axios.get(`${Data_Url.DATA_URL}/${Data_Url.MOVIES}`)
    return res;
}

export const getMovieByID = async(itemId)=>{
    const fetchItem = await fetch(`${Data_Url.DATA_URL}/${Data_Url.MOVIES}/${itemId}`);
    const res = await fetchItem.json();
    return res;
}

export const getMoviesByCat = async(catName)=>{
    const fetchMovies = await fetch(`${Data_Url.DATA_URL}/${Data_Url.MOVIES}`);
    const res = await fetchMovies.json();
    const newData = res?.filter(movies => movies?.genres?.find(item => item === catName))
    return newData;
}

export default getMovies;