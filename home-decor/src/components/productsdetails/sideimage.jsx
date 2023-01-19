import React from "react";
import { Image } from "@chakra-ui/react";

function Sideimage({ images }) {
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
        {images?.map((el, i) => (
          <div style={{ marginTop: "3px" }} key={i + 1}>
            <Image
              boxSize="100%"
              objectFit="cover"
              src={el}
              alt="Dan Abramov"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Sideimage;
