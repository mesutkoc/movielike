import React from "react";
import { Link } from "react-router-dom";
import { scrollPage } from "../../helpers";
import { Routes_Const } from "../../constants";
import "./Pagination.scss";

function Pagination({ pagenumber, handleClick, currentPage, setCurrentPage, genre }) {

    const selectPage = (type) => {
        if (type === "prev") {
            currentPage !== pagenumber[0] && setCurrentPage(currentPage - 1);
            scrollPage();
        }
        if (type === "next") {
            currentPage !== pagenumber.length && setCurrentPage(currentPage + 1);
            scrollPage();
        }

    }
    console.log(pagenumber);
    return <div className="pagination">
        <Link to={`/${Routes_Const.CATEGORY}/${genre}&${Routes_Const.PAGE}=${currentPage}`}><div className="prev" onClick={() => selectPage("prev")}><span>-</span></div></Link>
        <Link to={`/${Routes_Const.CATEGORY}/${genre}&${Routes_Const.PAGE}=${currentPage}`} className="paginationList">
            {pagenumber.map((item, index) => <span className={`paginationListItem${item === currentPage ? "Active" : ""}`} key={index + 1} onClick={() => handleClick(item)}>{item}</span>)}
        </Link>
        <Link to={`/${Routes_Const.CATEGORY}/${genre}&${Routes_Const.PAGE}=${currentPage}`}><div className="next" onClick={() => selectPage('next')}><span>+</span></div></Link>
    </div>;
}

export default Pagination;
