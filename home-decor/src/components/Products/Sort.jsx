import React from "react";
import Styles from "./Sort.module.css";
const Sort = ({ sort, handleSort, handleSortClose }) => {
  return (
    <div className={Styles.sort}>
      <p>Sort By:</p>
      <div
        style={{
          backgroundColor: sort.includes("price&_order=asc") ? "orange" : "",
        }}
        onClick={() => {
          handleSortClose();
          handleSort("price&_order=asc", "price", "asc");
        }}
      >
        Price: Low to High
      </div>
      <div
        style={{
          backgroundColor: sort.includes("price&_order=desc") ? "orange" : "",
        }}
        onClick={() => {
          handleSortClose();
          handleSort("price&_order=desc", "price", "desc");
        }}
      >
        Price: High to Low
      </div>
      <div
        style={{
          backgroundColor: sort.includes("discount&_order=desc")
            ? "orange"
            : "",
        }}
        onClick={() => {
          handleSortClose();
          handleSort("discount&_order=desc", "discount", "desc");
        }}
      >
        Discount
      </div>
    </div>
  );
};

export default Sort;
