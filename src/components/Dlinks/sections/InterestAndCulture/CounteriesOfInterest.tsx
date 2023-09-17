import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

const CounteriesOfInterest = () => {
  return (
    <Flex
      flexDir={["column", "row"]}
      align={"flex-start"}
      justifyContent={"space-between"}
    >
      <VStack align={"flex-start"}>
        <Heading
          pb={[0, 0, 10]}
          pt={[10, 10, 0]}
          fontSize={["1rem", "1.25rem"]}
        >
          African countries of interest:
        </Heading>
        <Text>Central African Republic</Text>
        <Text>Ethiopia</Text>
        <Text>Burkina Faso</Text>
      </VStack>
      <VStack align={"flex-start"}>
        <Heading
          pb={[0, 0, 10]}
          pt={[10, 10, 0]}
          fontSize={["1rem", "1.25rem"]}
        >
          Country of residence:
        </Heading>
        <Text>United Kingdom</Text>
      </VStack>
    </Flex>
  );
};

export default CounteriesOfInterest;
