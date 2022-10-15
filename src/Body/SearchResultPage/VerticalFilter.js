import React from "react";

function VerticalFilter({ filterItems, handleOnClick }) {
  return <div className="verticalFilter">
    <div className="verticalFilterPart">
      <label className="filterHeader">Genres</label>
      <ul className="verticalFilterItems">
        {filterItems?.map((item, index) => <li className="verticalFilterItem" key={index} onClick={() => handleOnClick({ clickedFilter: item })} >
          <div className="left-section">
            <input
              className="checkbox"
              type="checkbox"
              id={`custom-checkbox-${index}`}
              name={item}
              value={item}
            />
            <label htmlFor={`custom-checkbox-${index}`}>{item}</label>
          </div>
        </li>)}
      </ul>
    </div>
  </div >;
}

export default VerticalFilter;
