import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";

function Sideimage({ images, onClick, current }) {
  const [hover, sethover] = useState(false);

  return (
    <>
      <Box
          display= "flex"
          width= {{base:"30%" ,sm:"25%" , }}
          flexDirection= {{base:"row" ,sm:"row" ,md:"column" ,lg:"column"}}
        style={{
          margin: "10px",
        }}
      >
        {images?.map((el, i) => (
          <Box
            marginTop="3px"
            border="3px solid white"
            _hover={{border: "3px solid green"}}
            borderBottom={i == current ? "3px solid red" : "3px solid white"}
            padding= "3px"
            cursor = "pointer"
            key={i + 1}
            onClick={() => onClick(i)}
            
          >
            <Image
              boxSize="100%"
              objectFit="cover"
              src={el}
              alt="Dan Abramov"
            />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Sideimage;
