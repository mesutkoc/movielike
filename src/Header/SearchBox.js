import React, { useState } from "react";
import SuggestionPart from "./SuggestionPart";

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const [focused, setFocus] = useState(false);

    const keyDownHandler = (event) => {

        if (event.key === 'Enter') {
            console.log('enter', searchTerm);
        }
    }

    const onFocus = (event) => {
        setFocus(true)
    }

    const onBlur = (event) => {
        setFocus(false)
    }

    return (
        <div className="searchbox">
            <input className={`headerInput ${focused}`}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="Search any movie" id="message"
                name="message"
                onChange={event => setSearchTerm(event.target.value)}
                onKeyDown={keyDownHandler}></input>
                {
                    focused && <SuggestionPart></SuggestionPart>
                }           
                
        </div>);
}

export default SearchBox;