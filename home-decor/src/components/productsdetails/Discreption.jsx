import React from "react";
import { Heading } from "@chakra-ui/react";

function Discreption(props) {
  let { description } = props;
  return (
    <>
      <div style={{position:"relative" ,left:"2%" ,marginBottom:"50px"}}>
        <Heading
          size={"40px"}
          style={{ marginTop: "20px", fontWeight: "bolder !important" }}
        >
          Product Description{" "}
        </Heading>
        <p style={{ marginBottom: "15px", color: "#777", fontSize: "14px" }}>
          {description}
        </p>
      </div>
    </>
  );
}

export default Discreption;
