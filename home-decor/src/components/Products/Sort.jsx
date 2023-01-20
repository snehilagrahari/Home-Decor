import React from "react";
import Styles from "./Sort.module.css";
const Sort = ({ sort, handleSort, handleSortFilterClose }) => {
  return (
    <div className={Styles.sort}>
      <p>Sort By:</p>
      <div
        style={{
          backgroundColor: sort.includes("_sort=price&_order=asc")
            ? "orange"
            : "",
        }}
        onClick={() => {
          handleSortFilterClose();
          handleSort("_sort=price&_order=asc");
        }}
      >
        Price: Low to High
      </div>
      <div
        style={{
          backgroundColor: sort.includes("_sort=price&_order=desc")
            ? "orange"
            : "",
        }}
        onClick={() => {
          handleSortFilterClose();
          handleSort("_sort=price&_order=desc");
        }}
      >
        Price: High to Low
      </div>
      <div
        style={{
          backgroundColor: sort.includes("_sort=discount&_order=desc")
            ? "orange"
            : "",
        }}
        onClick={() => {
          handleSortFilterClose();
          handleSort("_sort=discount&_order=desc");
        }}
      >
        Discount
      </div>
    </div>
  );
};

export default Sort;
