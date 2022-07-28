import React from "react";
import { Link } from "react-router-dom";
import { Routes_Const } from "../../constants";
import "./TrailerButton.scss";
import randomPoint from "../../helpers";

function TrailerButton({id}) {
    
    let points = randomPoint();

    return (
        <div className="trailerButton">
            <Link to={`/${Routes_Const.DETAILS}/${id}`} className="buttonLink"><button className="button">SEE DETAILS</button></Link>
            <div className="bigCircle" style={{ backgroundImage: `conic-gradient(#FFA500 0deg, #FFA500 ${points[1] * 10}deg,black 0deg, black 360deg)` }}>
                <div className="middleCircle">{points[0]}</div>
            </div>
        </div>);
}

export default TrailerButton;
