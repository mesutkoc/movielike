import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from 'react-router-dom';
import SearchResultSide from "./SearchResultSide";
import VerticalFilter from "./VerticalFilter";
import "./SearchResultPage.scss"

function SearchResultPage() {
    const { state } = useLocation();
    const [filterItems, setFilterItems] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [checked, setChecked] = useState(null);
    const filterList = [];

    const filterMovies = ({ selectedFilter, state }) => {
        const data = state.filter(film => film?.genres?.some(a => a === selectedFilter));
        return data;
    }

    const filteredData = useMemo(() => (
        selectedFilter === '' ? state : filterMovies({ selectedFilter, state })
    ), [selectedFilter, state])

    const setFilterData = ({ state }) => {
        state.map(a => a?.genres?.filter(e => !filterList?.some(d => d === e) && filterList.push(e)));
        setFilterItems(filterList);
    };

    useEffect(() => {
        setFilterData({ state });
        setSelectedFilter('');
        setChecked(null);
    }, [state]);
    
    const handleOnClick = ({ clickedFilter, index }) => {
        setSelectedFilter(clickedFilter);
        setChecked(index);
    }


    return <div className="searchResultPage">
        <VerticalFilter filterItems={filterItems} handleOnClick={handleOnClick} checked={checked} setChecked={setChecked}></VerticalFilter>
        <SearchResultSide searchResult={filteredData}></SearchResultSide>
    </div>;
}

export default SearchResultPage;
