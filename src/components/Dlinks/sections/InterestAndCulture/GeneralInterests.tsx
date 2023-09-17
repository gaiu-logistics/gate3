import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import SliderWithThumb from "../../../Global/Slider";

const GeneralInterests = () => {
  return (
    <VStack align={"flex-start"}>
      <Heading pb={10} fontSize={["1rem", "1.25rem"]}>
        General Interest:
        <Text fontSize={["0.75rem", "1rem"]}>Through four dimensions</Text>
      </Heading>
      <VStack w={"100%"}>
        <Flex flexDir={["column", "column", "column", "row"]} w={"100%"}>
          <Text w="50%" whiteSpace={"nowrap"}>
            I am a Mother Earth Lover
            <Text as={"span"} color={"red"}>
              *
            </Text>
          </Text>
          <SliderWithThumb />
        </Flex>
        <Flex flexDir={["column", "column", "column", "row"]} w={"100%"}>
          <Text w="50%" whiteSpace={"nowrap"}>
            I am a Web3 Enthusiast
            <Text as={"span"} color={"red"}>
              *
            </Text>
          </Text>
          <SliderWithThumb />
        </Flex>
        <Flex flexDir={["column", "column", "column", "row"]} w={"100%"}>
          <Text w="50%" whiteSpace={"nowrap"}>
            I am a STEM Enthusiast
            <Text as={"span"} color={"red"}>
              *
            </Text>
          </Text>
          <SliderWithThumb />
        </Flex>
        <Flex flexDir={["column", "column", "column", "row"]} w={"100%"}>
          <Text w="50%" whiteSpace={"nowrap"}>
            I am a African identity Enthusiast
            <Text as={"span"} color={"red"}>
              *
            </Text>
          </Text>
          <SliderWithThumb />
        </Flex>
      </VStack>
    </VStack>
  );
};

export default GeneralInterests;
