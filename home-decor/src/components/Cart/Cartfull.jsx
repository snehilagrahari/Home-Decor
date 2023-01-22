import React from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import {
  getCartItems,
  removeItemFromCart,
  addItemToCart,
} from "../../redux/Cart/cart.actions";
import {
  Wrap,
  WrapItem,
  Center,
  Text,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { updateCartItem } from "../../redux/Cart/cart.actions";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CartEmpty from "./CartEmpty";

const Cartfull = () => {
  const dispatch = useDispatch();

  const { loading, error, datas } = useSelector((state) => state.cart);
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = date.getDate();
  let month = date.getMonth();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeItemFromCart(id));

    dispatch(getCartItems());
  };

  const Inc = (newcount, id, item) => {
    dispatch(
      updateCartItem(id, { count: newcount, price: item.price + item.fixed })
    );

    dispatch(getCartItems());
  };

  const Dec = (newcount, id, item) => {
    if (item.count !== 1) {
      dispatch(
        updateCartItem(id, { count: newcount, price: item.price - item.fixed })
      );

      dispatch(getCartItems());
    }
  };

  const navigate = useNavigate();

  const handleProductRedirect = (id) => {
    navigate(`/products/${id}`);
  };
  if (datas.length == 0) {
    return <CartEmpty />;
  } else {
    var k = 0;

    if (datas) {
      datas.map((item) => {
        k = k + item.price;
      });
    }
    let z = datas.length;

    return (
      <Box>
        <Wrap mt="30px">
          <WrapItem>
            <Center
              ml={{ lg: "100px", md: "100px", sm: "100px", base: "10px" }}
            >
              <Link to={"/"}>Home</Link>
              <Text fontWeight={"bold"}> /My Cart</Text>
            </Center>
          </WrapItem>

          <WrapItem>
            <Center>
              <Text
                ml={{
                  xl: "500px",
                  lg: "500px",
                  md: "350px",
                  sm: "80px",
                  base: "5px",
                }}
                fontWeight={"bold"}
              >
                SubTotal: ₹ {k}
              </Text>
              <Button
                ml="80px"
                bg="#902735"
                w={{ lg: "200px", md: "200px", sm: "200px", base: "100px" }}
                color={"white"}
                _hover={{ bg: "#902735" }}
              >
                Place Order
              </Button>
            </Center>
          </WrapItem>
        </Wrap>

        <Text
          ml={{ xl: "95px", lg: "95px", md: "95px", sm: "95px" }}
          fontWeight={"bold"}
        >
          My Cart ( {z} ) Items{" "}
        </Text>

        <SimpleGrid
          columns={{ xl: 3, lg: 2, md: 2, sm: 1, base: 1 }}
          spacing="-40px"
          ml="10px"
          mt="50px"
        >
          {datas
            ? datas.map((item) => {
                return (
                  <Center
                    key={item.id}
                    display={"block"}
                    borderRadius="10px"
                    border="1px solid gray"
                    w={{
                      xl: "440px",
                      lg: "440px",
                      md: "340px",
                      sm: "300px",
                      base: "250px",
                    }}
                    h={{
                      xl: "490px",
                      lg: "490px",
                      md: "500px",
                      base: "560px",
                      sm: "510px",
                    }}
                    ml={{
                      sm: "170px",
                      xl: "0px",
                      md: "0px",
                      lg: "0px",
                      base: "50px",
                    }}
                    mt="20px"
                  >
                    <Image
                      m=" 30px auto auto  auto"
                      src={item.images[0]}
                      maxW="200px"
                      maxH="250px"
                      cursor="pointer"
                      onClick={() => handleProductRedirect(item.id)}
                    />
                    <Text
                      textAlign={"center"}
                      color="gray.500"
                      fontWeight={"bold"}
                      mt="10px"
                      fontSize={"15px"}
                    >
                      {item.title}
                    </Text>
                    <Center mt="16px">
                      <Button
                        onClick={() => Dec(item.count - 1, item.id, item)}
                        mr="20px"
                        color="black"
                        bg="purple.300"
                      >
                        <Text fontSize={"30px"}>-</Text>
                      </Button>
                      <Text>{item.count}</Text>
                      <Button
                        onClick={() => Inc(item.count + 1, item.id, item)}
                        ml="20px"
                        color="black"
                        bg="purple.300"
                      >
                        <Text fontSize={"25px"}>+</Text>
                      </Button>
                    </Center>
                    <Text
                      mt="19px"
                      ml={{
                        xl: "180px",
                        lg: "175px",
                        md: "130px",
                        sm: "110px",
                        base: "85px",
                      }}
                      fontSize={"15px"}
                      fontWeight={"bold"}
                      color="gray.500"
                    >
                      Price: ₹ {item.price}
                    </Text>
                    <Text
                      textAlign={"center"}
                      mt="10px"
                      ml={{
                        xl: "0px",
                        lg: "0px",
                        md: "0px",
                        sm: "10px",
                        base: "20px",
                      }}
                      fontSize={{
                        base: "15px",
                        md: "15px",
                        sm: "15px",
                        lg: "15px",
                      }}
                      fontWeight={"bold"}
                      color="gray.500"
                    >
                      Estimated delivery time : {day + item.timeToShip + " "}
                      {monthNames[month]} 2023
                    </Text>

                    <Button
                      ml={{
                        xl: "170px",
                        lg: "170px",
                        md: "120px",
                        sm: "105px",
                        base: "80px",
                      }}
                      onClick={() => handleDelete(item.id)}
                      mt="15px"
                      color="black"
                      bg="purple.300"
                    >
                      <Text fontSize={"15px"}>Remove</Text>
                    </Button>
                  </Center>
                );
              })
            : ""}
        </SimpleGrid>

        <Wrap justify={"center"} mt="40px">
          <WrapItem>
            <Center display={"block"}>
              <Text mt="10px" fontSize={"30px"} fontWeight={"bold"}>
                Price Details
              </Text>
              <Text
                mt="10px"
                fontSize={"30px"}
                fontWeight={"bold"}
                color="gray.500"
              >
                Subtotal: ₹ {k}{" "}
              </Text>
              <Button
                mt="18px"
                mb="35px"
                bg="#902735"
                w="200px"
                color={"white"}
                _hover={{ bg: "#902735" }}
              >
                Place Order
              </Button>
            </Center>
          </WrapItem>
        </Wrap>

        <Footer />
      </Box>
    );
  }
};

export default Cartfull;
