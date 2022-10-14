import React from "react";
import SearchResult from "../SearchResult/SearchResult";

function SearchResultSide({ searchResult }) {
    return <div className="searchResultSide">
        <SearchResult searchResult={searchResult.length} page="search"></SearchResult>
        <div className="searcResultItems">
            {searchResult.map((result, index) =>
                <div className="cardDetail" key={index}>
                    <img className="detailImage" src={result?.poster} alt={result?.title} />
                    <span>{result?.overview}</span>
                </div>
            )}
        </div>
    </div>;
}

export default SearchResultSide;
