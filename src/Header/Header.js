import React, { memo } from "react";
import "./Header.scss";
import Button from "./Button";
import SearchBox from "./SearchBox";

function Header({ setGenreFiltersView, showGenreFilters, showBasket, setBasketView }) {
    return (
        <div className="rootHeader">
            <label className="headerTitle">METFLIX</label>
            <SearchBox></SearchBox>
            <Button type={"Genres"} setGenreFiltersView={setGenreFiltersView} showGenreFilters={showGenreFilters} showBasket={showBasket} setBasketView={setBasketView}></Button>
            <Button type={"Basket"} setGenreFiltersView={setGenreFiltersView} showGenreFilters={showGenreFilters} showBasket={showBasket} setBasketView={setBasketView}></Button>
        </div>);
}
export default memo(Header);