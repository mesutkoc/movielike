import React, { useState } from "react";
import Loader from "./Loader";
import Player from "./Player";
import "./WatchPart.scss";

function Screen({movie}) {

  const [loader, setLoading] = useState(false)

  return <div className="watchScreen">
        <div className="signalError"></div>
        <Loader loader={loader}></Loader>
        <Player movie={movie} setLoading={setLoading}></Player>
    </div>;
}

export default Screen;
