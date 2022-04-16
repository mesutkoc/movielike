import React from "react";
import "./Button.scss"

function Button({type}) {
  return <div className="headerButton"><button className={`button${type}`}>{type}</button></div>;
}

Button.defaultProps ={
    type: String
}
export default Button;