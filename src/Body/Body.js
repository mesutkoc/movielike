import React, {memo} from "react";
import "./Body.scss"
import VerticalCard from "./VerticalCard/VerticalCard";

function Body({movie}) {
    return (<div className="body">
        {movie.slice(0,5).map((movieData,index)=>
            <VerticalCard movieData={movieData} key={index}></VerticalCard>
        )} 
    </div>);
}

export default memo(Body);
