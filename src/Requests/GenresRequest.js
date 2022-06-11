import axios from "axios";

const getGenres = async() =>{
    const res = await axios.get('http://localhost:3000/genres')
    return res;
}

export default getGenres;