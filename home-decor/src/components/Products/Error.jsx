import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Error = () => {
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
        color="red.500"
        size="xl"
        boxSize={60}
      />
    </Box>
  );
};

export default Error;
