import React from "react";

function SearchResultSide({ searchResult }) {
    return <div className="searchResultSide"><ul>{searchResult.map((i, index) => 
            <li key={index}>
                <div className="cardDetail">
                    <img className="detailImage" src={i.poster} alt={i.title}/>
                    <span>{i.overview}</span>
                </div>
            </li>)}
        </ul>
    </div>;
}

export default SearchResultSide;
