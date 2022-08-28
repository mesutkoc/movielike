import React, { useState } from "react";
import Loader from "./Loader";
import Player from "./Player";
import "./WatchPart.scss";

function Screen({movie, setScreen, fullscreen}) {

  const [loader, setLoading] = useState(false)
  console.log(fullscreen);
  return <div className={`watchScreen ${fullscreen}`}>
        <div className="signalError"></div>
        <Loader loader={loader}></Loader>
        <Player movie={movie} setLoading={setLoading} setScreen={setScreen} fullscreen={fullscreen}></Player>
    </div>;
}

export default Screen;
