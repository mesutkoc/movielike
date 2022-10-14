import React from "react";

function VerticalFilter({ filterItems, handleOnClick, isChecked, handleOnChange }) {
  return <div className="verticalFilter">
    <div className="verticalFilterPart">
      <ul className="verticalFilterItems">
        {filterItems?.map((item, index) => <li className="verticalFilterItem" key={index} onClick={() => handleOnClick({ clickedFilter: item })} >  
        <input
          className="checkbox"
          type="checkbox"
          id={item}
          name={item}
          value={item}
          checked={isChecked}
          onChange={handleOnChange}
        /> {item}</li>)}
      </ul>
    </div>
  </div >;
}

export default VerticalFilter;
