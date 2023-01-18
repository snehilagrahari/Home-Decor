import React from "react";
import { Image } from "@chakra-ui/react";

function Sideimage() {
  return (
    <>
      <div
        style={{
          display: "flex-inline",
          flexDirection: "column",
          // border: "1px solid red",
          width: "25%",
          margin: "10px",
        }}
      >
        <div style={{ marginTop: "3px" }}>
          {/* <img src="" alt="" /> */}
          <Image
            boxSize="100%"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </div>
        <div style={{ marginTop: "8px" }}>
          {/* <img src="" alt="" /> */}
          <Image
            boxSize="100%"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </div>

        <div style={{ marginTop: "8px" }}>
          {/* <img src="" alt="" /> */}
          <Image
            boxSize="100%"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </div>
      </div>
    </>
  );
}

export default Sideimage;
