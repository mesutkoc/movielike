import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Player from "./Player";
import "./WatchPart.scss";

function Screen({ movie, setScreen, fullscreen }) {

  const [loader, setLoading] = useState(false)
  const [showPlay, setPlay] = useState(true);

  const startLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setPlay(true);
      setLoading(false);
    }, 2500)
  }

  useEffect(() => {
    startLoader();
    setPlay(false);
  }, [])

  return <div className={`watchScreen ${fullscreen}`}>
    <div className="signalError"></div>
    <Loader loader={loader}></Loader>
    <Player movie={movie} setLoading={setLoading} startLoader={startLoader} showPlay={showPlay} setPlay={setPlay} setScreen={setScreen} fullscreen={fullscreen}></Player>
  </div>;
}

export default Screen;
