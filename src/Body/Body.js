import React, { memo } from "react";
import "./Body.scss"
import CategoryCard from "./Category/CategoryCard";

function Body({ genre }) {
    return (<div className="body">
        {genre?.map((genreItem, index) =>
            <CategoryCard genreItem={genreItem} key={index}></CategoryCard>
        )}
        {/* {movie.slice(0, 8).map((movieData, index) =>
            <VerticalCard movieData={movieData} key={index}></VerticalCard>
        )} */}
    </div>);
}

export default memo(Body);
