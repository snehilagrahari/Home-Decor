import React from "react";
import { Image } from "@chakra-ui/react";

function Bigimage({ images }) {
  // console.log(images[0]);
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
          src={images[0]}
          alt="Dan Abramov"
        />
      </div>
    </>
  );
}

export default Bigimage;
