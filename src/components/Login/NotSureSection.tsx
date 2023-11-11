import { Button, Flex, Text, TextProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface NotSureSectionProps {
  linkStyle: TextProps;
  keycloakInstance: any;
}
const NotSureSection = ({
  linkStyle,
  keycloakInstance,
}: NotSureSectionProps) => {
  const links = [
    {
      name: "Register",
      path: "https://register.alkebulanmeta.network/now/",
    },
    {
      name: "Get Onweb3-Passport",
      path: "https://alkebulanmeta.app/",
    },
    {
      name: "Contact Us",
      path: "https://alkebulanmeta.app/contact-us/",
    },
  ];
  return (
    <Flex direction={"column"}>
      <Flex
        direction={["column", "column", "column", "row"]}
        flex={1}
        alignItems={["flex-start", "flex-start", "flex-start", "center"]}
        justifyContent={["flex-start", "space-between"]}
      >
        <Text fontSize={"lg"} mr={[0, 4]} whiteSpace={"nowrap"}>
          Can't login?
        </Text>
        <Flex
          direction={["column", "row"]}
          fontSize={"lg"}
          alignItems={["flex-start", "center"]}
          flexWrap={"wrap"}
        >
          {links.map((link, index) => (
            <Link to={link.path} target="_blank" key={index}>
              <Text
                {...linkStyle}
                fontSize={"sm"}
                whiteSpace={"nowrap"}
                mr={"2"}
              >
                {link.name}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
      {keycloakInstance.authenticated && (
        <Flex w={"fit-content"} alignSelf={"flex-end"} mt={"5"} gap="2">
          <Text>{keycloakInstance.tokenParsed!.preferred_username}</Text>
          <Button
            colorScheme={"blue"}
            variant={"outline"}
            size={"sm"}
            fontSize={"sm"}
            mt={[4, 0]}
            onClick={() => {
              keycloakInstance
                .logout({
                  redirectUri: "https://gate3v.alkebulanmeta.network/",
                })
                .then(() => {
                  console.log("logout");
                });
            }}
          >
            Logout
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default NotSureSection;
