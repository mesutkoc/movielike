import React from "react";
import "./TrailerButton.scss";
import randomPoint from "../../helpers";

function TrailerButton() {
    
    let points = randomPoint();

    return (
        <div className="trailerButton">
            <button className="button">WATCH TRAILER</button>
            <div className="bigCircle" style={{ backgroundImage: `conic-gradient(red 0deg, red ${points[1] * 10}deg,black 0deg, black 360deg)` }}>
                <div className="middleCircle">{points[0]}</div>
            </div>
        </div>);
}

export default TrailerButton;
