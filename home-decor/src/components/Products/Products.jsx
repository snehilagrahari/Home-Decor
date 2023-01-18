import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import ProductsCard from "./ProductsCard";
import Pagination from "./Pagination";

const Products = () => {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(15);

  const getProductsAPI = async () => {
    let responce = await fetch(
      `https://mock-server-ge69.onrender.com/api/Products`
    );
    let d = await responce.json();
    setData(d);
    setTotalPage(d.length);
  };

  useEffect(() => {
    getProductsAPI();
  }, []);

  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentProducts = data.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      padding={"30px 50px 30px 50px"}
      gap={5}
    >
      <Box border={"2px solid red"} w={"20%"} textAlign={"left"}>
        <Heading fontSize={30} textAlign={"left"}>
          Filter by
        </Heading>
        <Box h={"auto"}>
          <Accordion allowMultiple>
            {/* start hers */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={20} fontWeight={500}>
                      Price
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup colorScheme="red">
                  <Stack spacing={1}>
                    <Checkbox value="50to100">50 - 100 (11)</Checkbox>
                    <Checkbox value="100to500">100 - 500 (11)</Checkbox>
                    <Checkbox value="above500">above 500 (11)</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={20} fontWeight={500}>
                      Discount
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup colorScheme="red">
                  <Stack spacing={1}>
                    <Checkbox value="0to5">0% - 5% (11)</Checkbox>
                    <Checkbox value="5to10">5% - 10% (11)</Checkbox>
                    <Checkbox value="10to30">10% - 30% (11)</Checkbox>
                    <Checkbox value="30to60">30% - 60% (11)</Checkbox>
                    <Checkbox value="above60">above 60% (11)</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={20} fontWeight={500}>
                      Category
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup colorScheme="red">
                  <Stack spacing={1}>
                    <Checkbox value="accessories">Accessories (11)</Checkbox>
                    <Checkbox value="f&b">F&B (11)</Checkbox>
                    <Checkbox value="fashion">Fashion (11)</Checkbox>
                    <Checkbox value="dryfruits">Dry Fruits (11)</Checkbox>
                    <Checkbox value="homedecor">Home Decor (11)</Checkbox>
                    <Checkbox value="idols">Idols (11)</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={20} fontWeight={500}>
                      Time To Ship
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup colorScheme="red">
                  <Stack spacing={1}>
                    <Checkbox value="sameday">Same Day (11)</Checkbox>
                    <Checkbox value="1day">1 Day (11)</Checkbox>
                    <Checkbox value="2day">2 Day (11)</Checkbox>
                    <Checkbox value="3 Day">3 Day (11)</Checkbox>
                    <Checkbox value="5day">5 Day (11)</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={20} fontWeight={500}>
                      Returnable
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup colorScheme="red">
                  <Stack spacing={1}>
                    <Checkbox value="yes">Yes (11)</Checkbox>
                    <Checkbox value="no">No (11)</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text fontSize={20} fontWeight={500}>
                      Cancellable
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <CheckboxGroup colorScheme="red">
                  <Stack spacing={1}>
                    <Checkbox value="yes">Yes (11)</Checkbox>
                    <Checkbox value="no">No (11)</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
            {/* ends here */}
            {/* ends here */}
          </Accordion>
        </Box>
      </Box>

      <Box
        border={"2px solid red"}
        w={"80%"}
        height={"fit-content"}
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        gap={5}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"50%"}
          >
            <Text fontSize={20} fontWeight={500}>
              Sort By:
            </Text>
            <Button variant={"solid"} bg="#902735" colorScheme={"red"}>
              Price: Low to High
            </Button>
            <Button variant={"solid"} bg="#902735" colorScheme={"red"}>
              Price: High to Low
            </Button>
            <Button variant={"solid"} bg="#902735" colorScheme={"red"}>
              Discount
            </Button>
          </Box>
          <Text fontSize={20} fontWeight={500}>
            Showing 1-458
          </Text>
        </Box>

        <Box>
          <Grid gridTemplateColumns="repeat(3,1fr)" gap={5}>
            {currentProducts &&
              currentProducts.map((prod) => (
                <ProductsCard key={prod.id} {...prod} />
              ))}
          </Grid>
        </Box>

        <Box>
          {/* <Pagination /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
