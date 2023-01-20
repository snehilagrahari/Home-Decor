import { Spinner } from "@chakra-ui/react";
import React from "react";

const Error = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Spinner
        thickness="1px"
        speed="2s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
        boxSize={{
          sm: "20",
          md: "40",
          lg: "60",
        }}
      />
    </div>
  );
};

export default Error;
