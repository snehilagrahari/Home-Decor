import React from "react";
import { Image } from "@chakra-ui/react";

function Bigimage() {
  return (
    <>
      <div
        style={{
          // border: "1px solid red",
          width: "100%",
          position: "relative",
          left: "-62%",
        }}
      >
        <Image
          boxSize="90%"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </div>
    </>
  );
}

export default Bigimage;
