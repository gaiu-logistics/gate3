import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "@/assets/footerLogo.png";

const footerLinks = [
  {
    name: "Mission and Vision",
    path: "/",
  },
  {
    name: "Assets Store",
    path: "/about",
  },
  {
    name: "Assets Basket",
    path: "/services",
  },
  {
    name: "Apps Gateway",
    path: "/contact",
  },
];
const AlkebulanMeta = [
  {
    name: "Register",
    path: "https://id.alkebulanmeta.network/registration",
  },
  {
    name: "Login",
    path: "https://id.alkebulanmeta.network/realms/OnWeb3Keycloak/protocol/openid-connect/auth?client_id=sso&scope=openid%20email%20profile&redirect_uri=https://alkebulanmeta.app&response_type=code&state=T25XZWIzIEtleWNsb2Fr",
  },
  {
    name: "Support",
    path: "https://alkebulanmeta.app/contact-us/",
  },
];
const Footer = () => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      w={"100%"}
      bg={"bodyBackground"}
      pos={"relative"}
      bottom={"0"}
    >
      <Flex
        alignSelf={{ base: "center", sm: "flex-end" }}
        wrap={"wrap"}
        justifyContent={["center", "space-between"]}
        alignItems={"center"}
        py={[2, 4]}
      >
        {footerLinks.map((link) => (
          <Link to={link.path}>
            <Text color={"accentGreen"} mr={4}>
              {link.name}
            </Text>
          </Link>
        ))}
      </Flex>
      <Box backgroundColor={"black"}>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          maxWidth={"container.sm"}
          mx={"auto"}
          pt={{ base: 2, sm: 8 }}
          px={{ base: 4, sm: 8 }}
        >
          <Image src={logo} alt="AlkebulanMeta Logo" h={"75px"} w={"75px"} />
          <HStack color={"white"}>
            <Text textDecor={"none"} color={"white"} fontWeight={"bold"}>
              AlkebulanMeta:
            </Text>

            {AlkebulanMeta.map((link) => (
              <Link to={link.path}>
                <Text
                  color={"white"}
                  textDecor={"underline"}
                  _hover={{ color: "gray.400" }}
                >
                  {link.name}
                </Text>
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
