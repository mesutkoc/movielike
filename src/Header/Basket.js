import React from "react";
import './Basket.scss';

function Basket({ basket, setBasket }) {

    const removeItem = (movie) => {
        const movies = basket?.filter(item => item.id !== movie.id)
        setBasket([...movies]);
    }

    return <div className='basket'>
        <ul className="basketList">
            {basket?.length === 0 && <li className="emptyBasket">Your basket is empty.</li>}
            {basket?.map((movie, index) =>
                <li className="basketItem" key={index}>
                    <div>{index + 1}.</div>
                    <div className="basketPictureSpan"><img className="basketPicture" src={movie?.poster} alt="basketpicture"></img></div>
                    <div className="basketMovieTitle">{movie?.title}</div>
                    <div className="removeItem" onClick={() => removeItem(movie)}>Remove</div>
                </li>
            )}
        </ul>
    </div>;
}

export default Basket;
