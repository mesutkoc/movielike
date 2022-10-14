import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from 'react-router-dom';
import SearchResultSide from "./SearchResultSide";
import VerticalFilter from "./VerticalFilter";
import "./SearchResultPage.scss"

function SearchResultPage() {
    const { state } = useLocation();
    const [filterItems, setFilterItems] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');

    const filterList = [];

    

    const setFilterData = ({ state }) => {
        state.map(a => a.genres.filter(e => !filterList.some(d => d === e) && filterList.push(e)));
        setFilterItems(filterList);
    };

    useMemo(() => setFilterData({ state }), [state]);

    const handleOnClick = ({ clickedFilter }) => {
        setSelectedFilter(clickedFilter);
    }


    return <div className="searchResultPage">
        <VerticalFilter filterItems={filterItems} handleOnClick={handleOnClick}></VerticalFilter>
        <SearchResultSide searchResult={state}></SearchResultSide>
    </div>;
}

export default SearchResultPage;
