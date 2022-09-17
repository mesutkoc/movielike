import React, { useState } from "react";
import SuggestionPart from "./SuggestionPart";
import { useMovie } from "../Context/MovieContext";

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestionMovie, setSuggestionMovie] = useState([]);
    const [focused, setFocus] = useState(false);
    const { movies } = useMovie();

    const keyDownHandler = (event) => {
        const suggestMovies = movies?.filter(item => item?.title?.toLowerCase().trim().includes(searchTerm));
        searchTerm?.length > 1 ? setSuggestionMovie(suggestMovies) : setSuggestionMovie([]);

        if (event.key === 'Enter') {
            console.log('enter', searchTerm);
        }
    }

    const onFocus = (event) => {
        setFocus(true);
    }

    const onBlur = (event) => {
        setFocus(false);
    }

    return (
        <div className="searchbox">
            <input className={`headerInput ${focused}`}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="Search any movie" id="message"
                name="message"
                autoComplete="off"
                onChange={event => setSearchTerm(event.target.value.toLowerCase().trim())}
                onKeyDown={keyDownHandler}></input>
            {
                focused && <SuggestionPart suggestionMovie={suggestionMovie}></SuggestionPart>
            }

        </div>);
}

export default SearchBox;