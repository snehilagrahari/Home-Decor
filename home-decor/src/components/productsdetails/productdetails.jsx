import React from "react";
import { useEffect, useState } from "react";
import Sideimage from "./sideimage";
import Bigimage from "./Bigimage";
import Cartitems from "./Cartitems";
import Discreption from "./Discreption";

function Productdetails() {
  const [productdata, setproductdata] = useState([]);

  const getapidata = async () => {
    try {
      let res = await fetch(
        `https://mock-server-ge69.onrender.com/api/Products/1`
      ).then((res) => res);
      let data = await res.json();
      setproductdata(data);
      //   return data;
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }

    // return response.data
  };

  useEffect(() => {
    getapidata();
  }, []);

  //   console.log(productdata);
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
