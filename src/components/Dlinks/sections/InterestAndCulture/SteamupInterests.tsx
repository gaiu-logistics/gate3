import { Heading, Text, VStack } from "@chakra-ui/react";

const SteamupInterests = () => {
  return (
    <VStack align={"flex-start"}>
      <Heading fontSize={["1rem", "1.25rem"]} pb={10}>
        STEAM'd uP Interests:
        <Text fontSize={["0.75rem", "1rem"]}>
          Science, Tech, Engieering, the Arts & Maths
        </Text>
      </Heading>
      <Text as="b">Astronomy</Text>
      <Text>- study oof celestial bodies and phenomena</Text>
      <Text as="b">Enthnochoreology</Text>
      <Text>- study of dances and its implication in culture</Text>
      <Text as="b">Mathematics</Text>
      <Text>- study of magnitude, number, and forms</Text>
      <Text as="b">Metaphysics</Text>
      <Text>- study of principles of nature and thoughts</Text>
    </VStack>
  );
};

export default SteamupInterests;
