import React from "react";
import {useLocation} from 'react-router-dom';
import SearchResultSide from "./SearchResultSide";
import VerticalFilter from "./VerticalFilter";
import "./SearchResultPage.scss"

function SearchResultPage() {
    const { state } = useLocation();
    console.log(state);
    return <div className="searchResultPage">
            <VerticalFilter></VerticalFilter>
            <SearchResultSide searchResult={state}></SearchResultSide>
        </div>;
}

export default SearchResultPage;
