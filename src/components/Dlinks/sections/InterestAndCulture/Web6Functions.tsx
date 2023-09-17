import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import gem from "@/assets/Quartz.png";

const Web6Functions = () => {
  return (
    <VStack align={"flex-start"}>
      <Heading pb={10} fontSize={["1rem", "1.25rem"]}>
        STEAM'd uP Interests - In order of interest:
      </Heading>
      <UnorderedList fontSize={["1rem", "1.25rem"]}>
        <ListItem>illuminance cycles (light)</ListItem>
        <ListItem>the concentrations of mineral deposits</ListItem>
        <ListItem>microbial life cycles (biosphere markers)</ListItem>
        <ListItem>
          the types of soil (by % ratios of sand : clay : slit)
        </ListItem>
        <ListItem>moisture cycles (wet-dry)</ListItem>
        <ListItem>temperature cycles (hot-cold)</ListItem>
      </UnorderedList>
      <Flex width={"50%"} justifyContent={"space-between"} align={"center"}>
        <Box>
          <Heading py={10} fontSize={["1rem", "1.25rem"]}>
            Precious Material Choice:
          </Heading>
          <Text>Tangerine-Quartz Gem Material</Text>
        </Box>
        <Image src={gem} h="120px" w={"120px"} />
      </Flex>
    </VStack>
  );
};

export default Web6Functions;
