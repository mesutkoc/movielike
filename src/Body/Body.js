import React from "react";
import "./Body.scss"
import HorizontalCard from "./Horizontal/HorizontalCard";

function Body({movie}) {
    return (<div className="body">
        {movie.slice(0,50).map((movieData,index)=>
            <HorizontalCard movieData={movieData} key={index}></HorizontalCard>
        )}
        
    </div>);
}

export default Body;
