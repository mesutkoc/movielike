import React from "react";

function SearchResult({searchResult,genre}) {
  return <div className="searchResult">Found<span className="searchResSpan">{searchResult}</span>movies related to<span className="searchResSpan">{genre}</span>category.</div>;
}

export default SearchResult;
