import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Pagination = ({ currentPage, totalPage, paginate }) => {
  const pageNumber = new Array(totalPage).fill(1);
  const [page, setPage] = useState(currentPage);

  const handlePage = (num) => {
    paginate(page + num);
    setPage(page + num);
  };

  return (
    <Box
      border={"2px solid red"}
      display={"flex"}
      justifyContent={"space-around"}
      w={"50%"}
      margin={"auto"}
    >
      <Button
        variant={"solid"}
        bg="#902735"
        colorScheme={"red"}
        borderRadius={"10px"}
        isDisabled={page === 1}
        onClick={() => handlePage(-1)}
      >
        <AiFillCaretLeft />
      </Button>
      {pageNumber &&
        pageNumber.map((elm, indx) => (
          <Button
            key={indx}
            variant={"solid"}
            bg="#902735"
            colorScheme={"red"}
            borderRadius={"5px"}
            onClick={() => {
              paginate(elm + indx);
              setPage(elm + indx);
            }}
          >
            {elm + indx}
          </Button>
        ))}
      <Button
        variant={"solid"}
        bg="#902735"
        colorScheme={"red"}
        borderRadius={"5px"}
        isDisabled={page === totalPage}
        onClick={() => handlePage(1)}
      >
        <AiFillCaretRight />
      </Button>
    </Box>
  );
};

export default Pagination;
