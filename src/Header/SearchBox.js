import React, { useState } from "react";

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');

    const keyDownHandler = (event) => {

        if (event.key === 'Enter') {
            console.log('enter', searchTerm);
        }
    }

    return (
        <div className="searchbox">
            <input className="headerInput"
                placeholder="Search any movie" id="message"
                name="message"
                onChange={event => setSearchTerm(event.target.value)}
                onKeyDown={keyDownHandler}></input>
        </div>);
}

export default SearchBox;