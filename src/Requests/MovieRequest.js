import axios from "axios";

const getMovies = async() =>{
    const res = await axios.get('http://localhost:3000/movies')
    return res;
}

export default getMovies;