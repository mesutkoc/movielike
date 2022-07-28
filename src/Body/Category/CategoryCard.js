import React from "react";
import { Link, useParams } from "react-router-dom";
import { Routes_Const } from "../../constants";
import "./CategoryCard.scss";

function CategoryCard({ genreItem }) {
    const { page = 0 } = useParams();
    
    return <Link to={`${Routes_Const.CATEGORY}/${genreItem?.genre}&${Routes_Const.PAGE}=${page}`} className="categoryLink">
                <div className="catCard">
                <div className="catCardImages"><img className="catImageSizes" src={genreItem?.poster} alt="error"></img></div>
                    <p>{genreItem?.genre}</p>
                </div>
            </Link>
}

export default CategoryCard;
