import React from "react";
import { scrollPage } from "../../helpers";
import "./Pagination.scss";

function Pagination({ pagenumber, handleClick, currentPage, setCurrentPage }) {
    console.log(currentPage);
    const selectPage = (type) => {
        if(type === "prev"){
            currentPage !== pagenumber[0] && setCurrentPage(currentPage - 1);
            scrollPage();
        }
        if(type === "next"){
            currentPage !== pagenumber.length && setCurrentPage(currentPage + 1); 
            scrollPage();
        }
        
    }

    return <div className="pagination">
        <div className="prev" onClick={() => selectPage("prev")}><span>-</span></div>
        <div className="paginationList">
            {pagenumber.map((item, index) => <span className={`paginationListItem${item === currentPage ? "Active" : ""}`} key={index + 1} onClick={() => handleClick(item)}>{item}</span>)}
        </div>
        <div className="next" onClick={() => selectPage('next')}><span>+</span></div>
    </div>;
}

export default Pagination;
