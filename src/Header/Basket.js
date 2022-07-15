import React from "react";
import './Basket.scss'
function Basket({ basket }) {
    return <div className='basket'>
        <ul className="basketList">
            {basket?.length === 0 && <li className="basketItem">Your basket is empty.</li>}
            {basket?.map((movie, index) =>
                <li className="basketItem" key={index}>
                    <span>{index + 1}.</span>
                    <span className="basketPictureSpan"><img className="basketPicture" src={movie?.poster} alt="basketpicture"></img></span>
                    {movie?.title}
                </li>
            )}
        </ul>
    </div>;
}

export default Basket;
