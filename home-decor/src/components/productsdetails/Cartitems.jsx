import React from "react";
import { Button, Tag } from "@chakra-ui/react";

function Cartitems({ data }) {
  const handleaddtocart = () => {
    // cartitemapi(data.id);
  };

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
        <h1>{data.title}</h1>

        <p>From :{data.from}</p>

        <p>
          Price:₹{data.price} <Tag>Discount: {data.discount}%</Tag>
        </p>

        <div>
          <div>
            <h2>Time to ship:</h2>
            <h2>{data.timeToShip} minutes</h2>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div>
              <h3>Returnable :</h3>
              <h3>{data.returnable ? "Yes" : "No"}</h3>
            </div>

            <div>
              <h3>Cancelabe: </h3>
              <h3>{data.cancellable ? "Yes" : "No"}</h3>
            </div>
          </div>
          <hr />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {/* button  */}
          <Button
            bg="#902735"
            colorScheme={"red"}
            size="md"
            onClick={handleaddtocart}
          >
            Add to Cart
          </Button>
          <Button bg="#902735" colorScheme={"red"} size="md">
            Buy
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cartitems;
