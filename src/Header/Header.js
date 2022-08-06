import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Button from "./Button";
import SearchBox from "./SearchBox";

function Header({ setGenreFiltersView, showGenreFilters, showBasket, setBasketView, basket }) {
  return (
    <div className="rootHeader">
      <Link to="/" className="headerTitlelink">MOVIELIKE</Link>
      <SearchBox></SearchBox>
      <Button type={"Basket"} setGenreFiltersView={setGenreFiltersView} showGenreFilters={showGenreFilters} showBasket={showBasket} setBasketView={setBasketView} basket={basket}></Button>
    </div>);
}
export default memo(Header);