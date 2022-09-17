import React from "react";
import { Link } from "react-router-dom";
import { Routes_Const } from "../constants";
import "./SuggestionPart.scss"

function SuggestionPart({ suggestionMovie }) {
  return <div className="suggestionPart">
    <span className="suggestionMessage"><p>Type <strong> at least 2 </strong> characters.</p> </span>
    {suggestionMovie?.map((movie, index) =>
      <Link to={`/${Routes_Const.DETAILS}/${movie?.id}`} key={index}><p className="suggestItem" >{movie?.title}</p></Link>)}
  </div>;
}

export default SuggestionPart;
