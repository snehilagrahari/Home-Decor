import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      border={"2px solid red"}
    >
      <Spinner
        thickness="4px"
        speed="1s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        boxSize={{
          sm: "20",
          md: "40",
          lg: "60",
        }}
      />
    </Box>
  );
};

export default Loading;
