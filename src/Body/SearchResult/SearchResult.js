import React from "react";
import "./SearchResult.scss";

function SearchResult({ searchResult, genre, page }) {
  return <div className="searchResult">
    {page === 'category' ? 
    <div>Found<span className="searchResSpan">{searchResult}</span>movies related to<span className="searchResSpan">{genre}</span>category.</div> 
    : <div>Found<span className="searchResSpan">{searchResult}</span>related movies.</div>}

  </div>;
}

export default SearchResult;
