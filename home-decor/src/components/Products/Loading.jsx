import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
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
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Loading;
