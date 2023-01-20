import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPage, paginate }) => {
  const pageNumber = new Array(totalPage).fill(1).map((el, i) => i + 1);

  const handlePage = (num) => {
    paginate(currentPage + num);
  };

  return (
    <div className={Styles.main}>
      <button
        style={{
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          opacity: currentPage === 1 ? 0.6 : 1,
        }}
        disabled={currentPage === 1}
        className={Styles.prev}
        onClick={() => handlePage(-1)}
      >
        <AiFillCaretLeft size={20} />
      </button>
      <div className={Styles.buttons}>
        {pageNumber &&
          pageNumber.map((elm, indx) => (
            <button
              key={indx}
              style={{
                backgroundColor: currentPage === elm ? "#902735" : "white",
                color: currentPage === elm ? "white" : "#902735",
              }}
              onClick={() => {
                paginate(elm);
              }}
            >
              {elm}
            </button>
          ))}
      </div>
      <button
        style={{
          cursor: currentPage === totalPage ? "not-allowed" : "pointer",
          opacity: currentPage === totalPage ? 0.6 : 1,
        }}
        disabled={currentPage === totalPage}
        className={Styles.next}
        onClick={() => handlePage(1)}
      >
        <AiFillCaretRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
