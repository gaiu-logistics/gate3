import { Flex, Text, TextProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface NotSureSectionProps {
  linkStyle: TextProps;
}
const NotSureSection = ({ linkStyle }: NotSureSectionProps) => {
  const links = [
    {
      name: "Register",
      path: "https://id.alkebulanmeta.network/registration",
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
    <Flex
      direction={["column", "column", "column", "row"]}
      flex={1}
      alignItems={["flex-start", "flex-start", "flex-start", "center"]}
      justifyContent={["flex-start", "space-between"]}
    >
      {/* <Button onClick={getTokenBalance}>Get Data</Button> */}
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
            <Text {...linkStyle} fontSize={"sm"} whiteSpace={"nowrap"} mr={"2"}>
              {link.name}
            </Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default NotSureSection;
