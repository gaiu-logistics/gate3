import {
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Icon,
  Heading,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { Web3Button } from "@web3modal/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isConnected } = useAccount();

  return (
    <Flex pt={4} alignItems="center" justifyContent={"space-between"}>
      {/* Logo */}
      <Link to="/">
        <VStack
          alignItems={"flex-start"}
          maxW={"100px"}
          fontSize={{ base: "sm", md: "lg" }}
        >
          <Heading size={["md", "lg"]}>AlkebulanMeta</Heading>
          <HStack>
            <Text>Access</Text>
            <Text>|</Text>
            <Text>Power</Text>
            <Text>|</Text>
            <Text>Learning</Text>
            <Text>|</Text>
            <Text>Assets</Text>
          </HStack>
        </VStack>
      </Link>
      {/* Navbar Links (Visible on Larger Screens) */}
      <Flex display={{ base: "none", lg: "flex" }} gap={8}>
        <Link to="https://alkebulanmeta.app/mission/">
          <Text>Mission and Vision</Text>
        </Link>
        <Link to="https://alkebulanmeta.app/">
          <Text>Assets Store</Text>
        </Link>
        <Link to="https://alkebulanmeta.app/onweb3-passport-basket/">
          <Text>Assets Basket</Text>
        </Link>
        <Link to="">
          <Text color="textBody">Apps Gateway</Text>
        </Link>
        {isConnected ? <Web3Button /> : null}
      </Flex>

      {/* Burger Menu Icon */}
      <Icon
        as={HamburgerIcon}
        onClick={onOpen}
        display={{ base: "block", lg: "none" }} // Show on mobile devices, hide on larger screens
      />

      {/* Navbar Links (Drawer) */}
      <Drawer placement="start" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody
              display={"flex"}
              flexDirection={"column"}
              gap={8}
              mt={16}
            >
              <Link to="https://alkebulanmeta.app/mission/">
                <Text>Mission and Vision</Text>
              </Link>
              <Link to="https://alkebulanmeta.app/">
                <Text>Assets Store</Text>
              </Link>
              <Link to="https://alkebulanmeta.app/onweb3-passport-basket/">
                <Text>Assets Basket</Text>
              </Link>
              <Link to="/">
                <Text color="textBody">Apps Gateway</Text>
              </Link>
              {isConnected ? <Web3Button /> : null}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}

export default Navbar;
