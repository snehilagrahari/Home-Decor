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
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import ProductsCard from "./ProductsCard";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalProducts,
  getGridProducts,
} from "../../redux/products/products.action";
import Loading from "./Loading";
import Error from "./Error";
import Styles from "./Products.module.css";

const Products = () => {
  const { loading, error, gridProducts,totalCount } = useSelector(
    (store) => store.products
  );

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  //const [totalPage, setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const [sort, setSort] = useState("");



  useEffect(() => {
    dispatch(getGridProducts(currentPage, productsPerPage, sort));
  }, [currentPage, sort]);

const totalPage = Math.ceil(totalCount/productsPerPage);


  const paginate = (num) => {
    setCurrentPage(num);
  };

  const handleSort = (value) => {
    setSort(value);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      padding={"30px 50px 30px 50px"}
      gap={5}
      className={Styles.container}
    >
      <Box
        border={"2px solid green"}
        w={"20%"}
        textAlign={"left"}
        className={Styles.filterBox}
      >
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
        margin={"auto"}
        height={"fit-content"}
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        gap={5}
        className={Styles.gridBoxMain}
      >
        <Box
          display={{
            lg: "none",
            md: "",
            sm: "",
          }}
        >
          <>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    w={"50%"}
                    className={Styles.gridBoxSort}
                  >
                    <Text fontSize={20} fontWeight={500}>
                      Sort By:
                    </Text>
                    <Button
                      variant={"solid"}
                      bg={
                        sort.includes("_sort=price&_order=asc")
                          ? "orange"
                          : "#902735"
                      }
                      colorScheme={"red"}
                      onClick={() => handleSort("_sort=price&_order=asc")}
                    >
                      Price: Low to High
                    </Button>
                    <Button
                      variant={"solid"}
                      bg={
                        sort.includes("_sort=price&_order=desc")
                          ? "orange"
                          : "#902735"
                      }
                      colorScheme={"red"}
                      onClick={() => handleSort("_sort=price&_order=desc")}
                    >
                      Price: High to Low
                    </Button>
                    <Button
                      variant={"solid"}
                      bg={
                        sort.includes("_sort=discount&_order=desc")
                          ? "orange"
                          : "#902735"
                      }
                      colorScheme={"red"}
                      onClick={() => handleSort("_sort=discount&_order=desc")}
                    >
                      Discount
                    </Button>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        </Box>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            gap={5}
            className={Styles.gridBox}
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
                className={Styles.gridBoxSort}
              >
                <Text fontSize={20} fontWeight={500}>
                  Sort By:
                </Text>
                <Button
                  variant={"solid"}
                  bg={
                    sort.includes("_sort=price&_order=asc")
                      ? "orange"
                      : "#902735"
                  }
                  colorScheme={"red"}
                  onClick={() => handleSort("_sort=price&_order=asc")}
                >
                  Price: Low to High
                </Button>
                <Button
                  variant={"solid"}
                  bg={
                    sort.includes("_sort=price&_order=desc")
                      ? "orange"
                      : "#902735"
                  }
                  colorScheme={"red"}
                  onClick={() => handleSort("_sort=price&_order=desc")}
                >
                  Price: High to Low
                </Button>
                <Button
                  variant={"solid"}
                  bg={
                    sort.includes("_sort=discount&_order=desc")
                      ? "orange"
                      : "#902735"
                  }
                  colorScheme={"red"}
                  onClick={() => handleSort("_sort=discount&_order=desc")}
                >
                  Discount
                </Button>
              </Box>
              <Text
                fontSize={20}
                fontWeight={500}
                className={Styles.gridBoxText}
              >
                Showing {`${1+((currentPage*15)-15)}-${currentPage*15} of ${totalCount}`}
              </Text>
            </Box>

            <Box>
              <Grid
                gap={5}
                gridTemplateColumns={{
                  sm: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
              >
                {gridProducts &&
                  gridProducts.map((prod) => (
                    <ProductsCard key={prod.id} {...prod} />
                  ))}
              </Grid>
            </Box>

            <Box>
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                paginate={paginate}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Products;

/*
  // const [searchParams, setSearchParams] = useSearchParams();

  // //console.log(searchParams.get("q, cate, sort, order")); by search param

  // //setSearchParams(&price:216)


  // //q category

  // URL={
  //   q : searchParams.get('q')||"",
  //   category : searchParams.get('q')||"",
}
*/
