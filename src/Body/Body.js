import React, {memo} from "react";
import "./Body.scss"
import HorizontalCard from "./HorizontalCard/HorizontalCard";
import VerticalCard from "./VerticalCard/VerticalCard";

function Body({movie}) {
    return (<div className="body">
        {/* {movie.slice(0,5).map((movieData,index)=>
            <VerticalCard movieData={movieData} key={index}></VerticalCard>
        )}  */}
        {movie.slice(0,5).map((movieData,index)=>
            <HorizontalCard movieData={movieData} key={index}></HorizontalCard>
        )} 
    </div>);
}

export default memo(Body);
