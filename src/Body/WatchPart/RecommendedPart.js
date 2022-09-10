import React from "react";
import RecommendCard from "./RecommendCard";
import "./WatchPart.scss";

function RecommendedPart({ fullscreen, recoMovie }) {
  return <div className={`recommendPart ${fullscreen}`}>
    <div className="recommendHeader">Recommendation Part</div>
    <div className="recommendContent">
      {recoMovie?.map((movie, index) => <RecommendCard movie={movie} key={index}></RecommendCard>)}
    </div>

  </div>;
}

export default RecommendedPart;
