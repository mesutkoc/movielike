import React from "react";
import "./Header.scss";
import Button from "./Button";
import SearchBox from "./SearchBox";

function Header() {
    return (
        <div className="rootHeader">
            <label className="headerTitle">METFLIX</label>
            <SearchBox></SearchBox>
            <Button type={"Genres"}></Button>
            <Button type={"Basket"}></Button>
        </div>);
}
export default Header;