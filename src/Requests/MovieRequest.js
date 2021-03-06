import axios from "axios";

const getMovies = async() =>{
    const res = await axios.get('http://localhost:3000/movies')
    return res;
}

export const getMovie = async(itemId)=>{
    const fetchItem = await fetch(`http://localhost:3000/movies/${itemId}`);
    const res = await fetchItem.json();
    return res;
}

export const getCatMovies = async(catName)=>{
    const fetchMovies = await fetch(`http://localhost:3000/movies?genres=${catName}`);
    const res = await fetchMovies.json();
    return res;
}

export default getMovies;