import React from "react";
import { Button } from "@chakra-ui/react";

function Cartitems() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          left: "-50%",
          justifyContent: "space-evenly",
          // width: "100%",
        }}
      >
        {/* for product details.. */}
        <p>
          Parfoka Soft Plush Baby Ball With Rattle Sound (size 11 Cm,m), Multi
          Color
        </p>

        <p>From seller</p>

        <p>
          Price:$123 <p>Discount: </p>
        </p>

        <div>
          <div>
            <h2>Time to ship</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <h3>Return able</h3>
            <h3>Cancel abe</h3>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {/* button  */}
          <Button colorScheme="teal" size="sm">
            Add to Cart
          </Button>
          <Button colorScheme="teal" size="sm">
            Buy
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cartitems;
