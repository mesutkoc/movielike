import React, { useState } from "react";
import { useMovie } from "../Context/MovieContext";
import { useNavigate } from 'react-router-dom';
import SuggestionPart from "./SuggestionPart";
import { ReactComponent as SearchIcon } from "../Icons/search-icon.svg"
import { Routes_Const } from "../constants";

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestionMovie, setSuggestionMovie] = useState([]);
    const [focused, setFocus] = useState(false);

    const { movies } = useMovie();
    const navigate = useNavigate();
    const searchTermLength = searchTerm?.length;
    
    const keyDownHandler = (event) => {
        const suggestMovies = movies?.filter(item => item?.title?.toLowerCase().trim().includes(searchTerm));
        searchTermLength > 1 ? setSuggestionMovie(suggestMovies) : setSuggestionMovie([]);

        if (event.key === 'Enter' && searchTermLength > 1) {
            navigate(`${Routes_Const.SEARCH_RESULT}`, { state: suggestMovies });
            setFocus(false);
            setSearchTerm('');
            setSuggestionMovie([]);
            event.target.value = '';
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
            <div className={`searchInput ${focused}`}>
                <SearchIcon className="searchIcon"></SearchIcon>
                <input className={`headerInput`}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder="Search any movie" id="message"
                    name="message"
                    autoComplete="off"
                    onChange={event => setSearchTerm(event.target.value.toLowerCase().trim())}
                    onKeyDown={keyDownHandler}></input>
            </div>
            {
                focused && <SuggestionPart suggestionMovie={suggestionMovie} searchTerm={searchTerm}></SuggestionPart>
            }
        </div>);
}

export default SearchBox;