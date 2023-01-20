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
          left: "-60%",
          // justifyContent: "space-evenly",

          // width: "100%",
        }}
      >
        {/* for product details.. */}
        <h1
          style={{
            fontSize: "23px",
            marginBottom: "0px",
            paddingTop: "26px",
            fontFamily: "none",
          }}
        >
          {data.title}
        </h1>

        <p
          style={{
            fontSize: "14px",
            fontFamily: "fangsong",
            marginBottom: "21px",
          }}
        >
          From :{data.from}
        </p>

        <p style={{ color: "#fba937", fontSize: "28px" }}>
          ₹{data.price}{" "}
          <Tag
            style={{ color: "#902735", fontSize: "14px", marginTop: "10px" }}
          >
            {"Discount : "}
            {data.discount}%
          </Tag>
        </p>

        <div>
          <div style={{ marginTop: "24px", marginBottom: "11px" }}>
            <h2
              style={{
                color: "rgb(117, 117, 117)",
                fontSize: "18px",
                fontWeight: "500",
                width: "150px",
              }}
            >
              Details:
            </h2>
            <h2 style={{ color: "#333", fontFamily: "fangsong" }}>
              Time To Ship:
            </h2>
            <h2 style={{ color: "#777" }}>{data.timeToShip} Days</h2>
          </div>

          <hr />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "11px",
            }}
          >
            <div>
              <h3 style={{ color: "#333", fontFamily: "fangsong" }}>
                Returnable :
              </h3>
              <h3 style={{ color: "#777" }}>
                {data.returnable ? "Yes" : "No"}
              </h3>
            </div>

            <div>
              <h3 style={{ color: "#333", fontFamily: "fangsong" }}>
                Cancellabe:{" "}
              </h3>
              <h3 style={{ color: "#777" }}>
                {data.cancellable ? "Yes" : "No"}
              </h3>
            </div>
          </div>
          <hr />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10px",
            marginBottom: "10px",
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
          {/* <Button bg="#902735" colorScheme={"red"} size="md">
            Buy
          </Button> */}
        </div>
      </div>
    </>
  );
}

export default Cartitems;
