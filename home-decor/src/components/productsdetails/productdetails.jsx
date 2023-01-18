import React from "react";
import Sideimage from "./sideimage";
import Bigimage from "./Bigimage";
import Cartitems from "./Cartitems";
import Discreption from "./Discreption";

function Productdetails() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "2px",
        }}
      >
        <Sideimage />
        <Bigimage />
        <Cartitems />
      </div>

      <Discreption />
    </div>
  );
}

export default Productdetails;
