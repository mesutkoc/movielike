import React from "react";

function VerticalFilter({ filterItems, handleOnClick, checked, setChecked }) {
  return <div className="verticalFilter">
    <div className="verticalFilterPart">
      <label className="filterHeader">Genres</label>
      <ul className="verticalFilterItems">
        {filterItems?.map((item, index) => <li className="verticalFilterItem" key={index} onClick={() => handleOnClick({ clickedFilter: item, index })} >
          <div className="left-section">
            <input
              type="radio"
              id={`custom-checkbox-${index}`}
              name={item}
              value={item}
              checked={checked === index}
              onChange={() => {}}
            />
          </div>
          {item}
        </li>)}
      </ul>
    </div>
  </div >;
}

export default VerticalFilter;
