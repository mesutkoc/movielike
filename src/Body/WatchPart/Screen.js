import React from "react";
import Player from "./Player";
import "./WatchPart.scss";

function Screen({movie}) {
  return <div className="watchScreen">
        <div className="signalError"></div>
        <Player movie={movie}></Player>
    </div>;
}

export default Screen;
