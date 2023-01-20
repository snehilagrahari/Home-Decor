import React from "react";
import { Image } from "@chakra-ui/react";

function Bigimage(props) {
  // console.log(images[0]);
  let {images}=props
  // const images[0] =images
  console.log(images);
  // let i = 0;
  // let valu=""
  // for (i in images) {
  //   valu = images[i];
  //   return;
  // }
  // console.log(valu);

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
        <Image boxSize="90%" objectFit="cover" src={images[0]} alt="Dan Abramov" />
      </div>
    </>
  );
}

export default Bigimage;
