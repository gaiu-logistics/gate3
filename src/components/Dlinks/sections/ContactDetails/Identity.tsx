import { Text, VStack } from "@chakra-ui/react";
const textContent = [
  {
    title: "Chat Name:",
    content: "@astehmari:alkebulanmeta.network",
    type: "text",
  },
  {
    title: "Display Name:",
    content: "1st gen 400",
    type: "text",
  },
  {
    title: "dLinks Profile URL (public link):",
    content: "https://dlinks.alkebulanmeta.network/1stgen400",
    type: "link",
  },
];
const Identity = () => {
  return (
    <VStack alignItems={"flex-start"}>
      {textContent.map((item, index) => (
        <Text key={index}>
          {item.title}{" "}
          <Text as="b">
            {item.type === "link" ? (
              <a href={item.content} target="_blank">
                {item.content}
              </a>
            ) : (
              item.content
            )}
          </Text>
        </Text>
      ))}
    </VStack>
  );
};
export default Identity;
