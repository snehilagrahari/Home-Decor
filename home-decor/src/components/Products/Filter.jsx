import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Box,
  CheckboxGroup,
  Text,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
const Filter = ({ handleSortFilterClose }) => {
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
              <CheckboxGroup colorScheme="red">
                <Stack spacing={1}>
                  <Checkbox
                    onClick={() => handleSortFilterClose()}
                    value="50to100"
                  >
                    50 - 100 (11)
                  </Checkbox>
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
                  <Text fontSize={16} fontWeight={500}>
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
                  <Text fontSize={16} fontWeight={500}>
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
                  <Text fontSize={16} fontWeight={500}>
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
                  <Text fontSize={16} fontWeight={500}>
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
                  <Text fontSize={16} fontWeight={500}>
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
    </div>
  );
};

export default Filter;
