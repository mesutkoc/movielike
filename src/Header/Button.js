import React from "react";
import "./Button.scss"

function Button({ type, setGenreFiltersView, showBasket, setBasketView, basket }) {

  const showGenresList = (type) => {
    if (type === 'Basket') {
      setGenreFiltersView(false);
      showBasket === false ? setBasketView(true) : setBasketView(false)
    }
  }
  
  return <div className="headerButton" onClick={() => showGenresList(type)}>
          <button className={`button${type}`}>{type}</button>
          {type === "Basket" && <div className="basketLength">{basket?.length}</div>}
        </div>;
}

Button.defaultProps = {
  type: String
}
export default Button;