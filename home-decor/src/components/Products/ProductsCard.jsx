import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductsCard = ({ images, title, price }) => {
  return (
    <>
      <Card maxW="sm" border={"1px solid red"}>
        <CardBody>
          <Image
            display={"block"}
            margin={"auto"}
            boxSize={250}
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
            <Text color="orange" fontSize="18px" fontWeight={"bold"}>
              ₹ {price}
            </Text>
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
