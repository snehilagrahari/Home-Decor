import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Box,
  RadioGroup,
  Text,
  Stack,
  Radio,
} from "@chakra-ui/react";
const Filter = ({ handleFilterClose, filterDefaultValues }) => {
  /****************   destrcturing the keys to show radio default values if any    *****************/
  const { price, discount, category, timeToShip, returnable, cancellable } =
    filterDefaultValues;
  return (
    <div>
      <Heading fontSize={20} textAlign={"left"}>
        Filter by
      </Heading>
      <Box h={"auto"}>
        <Accordion allowMultiple>
          {/* start hers */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={16} fontWeight={500}>
                    Price
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup
                colorScheme="red"
                onChange={handleFilterClose}
                defaultValue={price}
              >
                <Stack spacing={1}>
                  <Radio value="100*500_price" name="price">
                    100 - 500 (11)
                  </Radio>
                  <Radio value="500*1000_price" name="price">
                    500 - 1000 (11)
                  </Radio>
                  <Radio value="1000*10000000000_price" name="price">
                    Above 1000 (11)
                  </Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={16} fontWeight={500}>
                    Discount
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup
                colorScheme="red"
                onChange={handleFilterClose}
                defaultValue={discount}
              >
                <Stack spacing={1}>
                  <Radio value="0*5_discount" name="discount">
                    0% - 5% (11)
                  </Radio>
                  <Radio value="5*10_discount" name="discount">
                    5% - 10% (11)
                  </Radio>
                  <Radio value="10*30_discount" name="discount">
                    10% - 30% (11)
                  </Radio>
                  <Radio value="30*60_discount" name="discount">
                    30% - 60% (11)
                  </Radio>
                  <Radio value="60_discount" name="discount">
                    Above 60% (11)
                  </Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={16} fontWeight={500}>
                    Category
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup
                colorScheme="red"
                onChange={handleFilterClose}
                defaultValue={category}
              >
                <Stack spacing={1}>
                  <Radio value="F&B_category" name="category">
                    F&B (11)
                  </Radio>
                  <Radio value="fashion_category" name="category">
                    Fashion (11)
                  </Radio>
                  <Radio value="Grocery_category" name="category">
                    Grocery (11)
                  </Radio>
                  <Radio value="Dry fruits_category" name="category">
                    Dry Fruits (11)
                  </Radio>
                  <Radio value="Packaged Foods_category" name="category">
                    Packaged Foods (11)
                  </Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={16} fontWeight={500}>
                    Time To Ship
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup
                colorScheme="red"
                onChange={handleFilterClose}
                defaultValue={timeToShip}
              >
                <Stack spacing={1}>
                  <Radio value="0_timeToShip" name="timeToShip">
                    Same Day (11)
                  </Radio>
                  <Radio value="1_timeToShip" name="timeToShip">
                    1 Day (11)
                  </Radio>
                  <Radio value="2_timeToShip" name="timeToShip">
                    2 Day (11)
                  </Radio>
                  <Radio value="3_timeToShip" name="timeToShip">
                    3 Day (11)
                  </Radio>
                  <Radio value="5_timeToShip" name="timeToShip">
                    5 Day (11)
                  </Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={16} fontWeight={500}>
                    Returnable
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup
                colorScheme="red"
                onChange={handleFilterClose}
                defaultValue={returnable}
              >
                <Stack spacing={1}>
                  <Radio value="true_returnable" name="returnable">
                    Yes (11)
                  </Radio>
                  <Radio value="false_returnable" name="returnable">
                    No (11)
                  </Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={16} fontWeight={500}>
                    Cancellable
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup
                colorScheme="red"
                onChange={handleFilterClose}
                defaultValue={cancellable}
              >
                <Stack spacing={1}>
                  <Radio value="true_cancellable" name="cancellable">
                    Yes (11)
                  </Radio>
                  <Radio value="false_cancellable" name="cancellable">
                    No (11)
                  </Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>
          {/* ends here */}
          {/* ends here */}
        </Accordion>
      </Box>
    </div>
  );
};

export default Filter;
