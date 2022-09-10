import React from "react";
import "./WatchPart.scss";

function RecommendedPart({ fullscreen, recoMovie }) {
  console.log(recoMovie);
  return <div className={`recommendPart ${fullscreen}`}>RecommendedPart</div>;
}

export default RecommendedPart;
