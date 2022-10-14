import React from "react";

function VerticalFilter({ filterItems, handleOnClick }) {
  return <div className="verticalFilter">
    <div className="verticalFilterPart">
      <ul className="verticalFilterItems">
        {filterItems?.map((item, index) => <li className="verticalFilterItem" key={index} onClick={() => handleOnClick({ clickedFilter: item })} > {item}</li>)}
      </ul>
    </div>
  </div >;
}

export default VerticalFilter;
