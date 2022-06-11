import React from "react";
import CardHeader from "../VerticalCardComponents/CardHeader";
import CardImage from "../VerticalCardComponents/CardImage";
import FavPart from "../VerticalCardComponents/FavPart";
import {ReactComponent as CirclePlay} from "../../Icons/circle-play.svg"

import './VerticalCard.scss';

function VerticalCard({ movieData }) {
    const selectItem=()=>{
        console.log('test')
    }
    return <div className="verticalCard">
        <CirclePlay className="circlePlay" onClick={()=>selectItem()}/>
        <CardImage image={movieData?.poster}/>
        <CardHeader title={movieData?.title}/>
        <FavPart />
    </div>;
}

export default VerticalCard;
