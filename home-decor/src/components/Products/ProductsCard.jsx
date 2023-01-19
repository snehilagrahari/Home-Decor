import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductsCard = ({ images, title, price, discount }) => {
  const discountedPrice = Math.ceil(price - (discount / 100) * price);
  return (
    <>
      <Card maxW="sm" border={"1px solid red"}>
        <CardBody>
          <Image
            display={"block"}
            margin={"auto"}
            boxSize={{
              sm: "40",
              md: "100",
              lg: "250",
            }}
            src={images[0]}
            alt={title}
          />
          <Stack mt={6} spacing="1">
            <Heading
              size="md"
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
            >
              {title}
            </Heading>
            {discount === 0 ? (
              <Text color="orange" fontSize="18px" fontWeight={"bold"}>
                ₹ {price}
              </Text>
            ) : (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={3}
                margin={"auto"}
                textAlign={"center"}
              >
                <Text color="orange" fontSize="18px" fontWeight={"bold"}>
                  ₹ {discountedPrice}
                </Text>
                <Text textDecoration={"line-through"} color={"gray"}>
                  ₹ {price}
                </Text>
                <Text color={"red"} fontSize={15}>
                  {discount}%off
                </Text>
              </Box>
            )}
          </Stack>
          <Button colorScheme={"red"} bg="#902735" w={"100%"} gap={5}>
            <Icon as={AiOutlineShoppingCart} boxSize={6} />
            Add to cart
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductsCard;
