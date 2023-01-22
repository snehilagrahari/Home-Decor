
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { ImUser, ImCart } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";


import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
  Flex,
  Input,
  Image,
  Circle,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { AUTH_LOGOUT } from "../../redux/auth/auth.type";
import { Logout } from "../../redux/auth/auth.actions";
import { getCartItems } from "../../redux/Cart/cart.actions";

export const Navbar1 = () => {

  const isAuth = useSelector((store) => store.auth.isAuth);

  const cart = useSelector((store) => store.cart.datas);


  const [searchText, setSearchText] = useState("");


  const handleSearchClick = ()=>{
   
    
    if(searchText.trim()!="")
    {
     
        navigate(`/search?q=${searchText}`);
           
    
    }

    
  }
  const handleOrderClick=()=>{
    navigate('/orders');
  }


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(Logout());
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <Flex
      maxW={"100%"}
      p="5px 20px"
      zIndex={1}
      position="sticky"
      top="0"
      bgColor="#902735"
      justifyContent="space-between"
      color="white"
      marginBottom={3}
    >
      <Box width="60px" onClick={() => navigate("/")} cursor="pointer">
        <Image src={"Images/Logo.png"} alt="home decor logo" />
      </Box>
      <Flex alignItems="center" display={{ base: "none", sm: "flex" }} gap={1}>
        <Text fontSize="lg" color="white">
          Search{" "}
        </Text>
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          bgColor="whiteAlpha.200"
          color="white"
          minW={{ sm: "200px", md: "300px" }}
          _focus={{ border: "2px solid red" }}
        />
        <Circle
          onClick={handleSearchClick}
          bgColor="whiteAlpha.500"
          p={2}
          border="1px solid white"
          cursor="pointer"
          _hover={{ border: "1px solid red" }}
        >
          <BsSearch size="25px" color="white" />
        </Circle>
      </Flex>
      <Flex alignItems="center" gap={2}>
        <Flex alignItems="center" gap={1}>
          <ImUser size={"25px"} color="white" />
          {isAuth ? (
            <Menu>
              <MenuButton>
                <Text
                  as="span"
                  display={{ base: "none", sm: "none", md: "block" }}
                >
                  Account
                </Text>
              </MenuButton>
              <MenuList color={"black"}>
                <MenuItem>My Account</MenuItem>
                <MenuItem onClick={handleOrderClick}>My Orders</MenuItem>
                <MenuItem>My Cart</MenuItem>
                <MenuItem onClick={handleClick}>SignOut</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Text display={{ base: "none", sm: "none", md: "block" }}>
              Sign in/Register
            </Text>
          )}
        </Flex>
        <Flex
          alignItems="center"
          gap={1}
          cursor="pointer"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ImCart size={"25px"} />
          <Text display={{ base: "none", sm: "none", md: "block" }}>Cart</Text>
          <Circle color="white" bgColor="green.300" p="0px 5px" fontSize="10px">
            {cart.length}
          </Circle>
        </Flex>
      </Flex>
    </Flex>
  );
};
