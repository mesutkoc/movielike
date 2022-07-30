import React from "react";
import { Link } from "react-router-dom";
import { scrollPage } from "../../helpers";
import { Routes_Const } from "../../constants";
import "./Pagination.scss";

function Pagination({ pagenumber, currentPage, setCurrentPage, genre }) {

    const selectPage = ({ type, item }) => {
        if (type === "prev" && currentPage !== pagenumber[0]) {
            setCurrentPage(currentPage - 1);
            scrollPage();
        }
        if (type === "next" && currentPage !== pagenumber.length) {
            setCurrentPage(currentPage + 1);
            scrollPage();
        }
        if (item) {
            console.log(item);
            setCurrentPage(Number(item));
            scrollPage();
        }
    }

    return <div className="pagination">
        <Link to={`/${Routes_Const.CATEGORY}/${genre}&${Routes_Const.PAGE}=${currentPage}`} className="prevLink"><div className="prev" onClick={() => selectPage({ type: "prev" })}><span>-</span></div></Link>
        <Link to={`/${Routes_Const.CATEGORY}/${genre}&${Routes_Const.PAGE}=${currentPage}`} className="paginationList">
            {pagenumber.map((item, index) => <span className={`paginationListItem${item === currentPage ? "Active" : ""}`} key={index + 1} onClick={() => selectPage({ item })}>{item}</span>)}
        </Link>
        <Link to={`/${Routes_Const.CATEGORY}/${genre}&${Routes_Const.PAGE}=${currentPage}`} className="nextLink"><div className="next" onClick={() => selectPage({ type: 'next' })}><span>+</span></div></Link>
    </div>;
}

export default Pagination;
