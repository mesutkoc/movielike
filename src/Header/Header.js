import React from "react";
import "./Header.scss";
import Button from "./Button";

function Header() {
    return (
        <div className="rootHeader">
            <label className="headerTitle">METLIX</label>
            <div>
                <input className="headerInput" placeholder="Search any movie"></input>
                <button className="headerSearchButton">Search</button>
            </div>
            <div>
                <Button type={"Genres"}></Button>
                <Button type={"Basket"}></Button>
            </div>
        </div>);
}
export default Header;