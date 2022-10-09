import React from "react";
import SearchResult from "../SearchResult/SearchResult";

function SearchResultSide({ searchResult }) {
    return <div className="searchResultSide">
        <SearchResult searchResult={searchResult.length} page="search"></SearchResult>
        {searchResult.map((result) =>
            <div className="cardDetail">
                <img className="detailImage" src={result?.poster} alt={result?.title} />
                <span>{result?.overview}</span>
            </div>
        )}
    </div>;
}

export default SearchResultSide;
