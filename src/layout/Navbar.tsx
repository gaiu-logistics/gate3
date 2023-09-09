import {
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Icon,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/HeaderLogo.png";

interface NavbarProps {
  resetAllSelections: () => void;
}
function Navbar({ resetAllSelections }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex py={4} alignItems="center" justifyContent={"space-between"}>
      {/* Logo */}
      <Flex onClick={resetAllSelections}>
        <Link to="/">
          <Image
            src={HeaderLogo}
            maxW={["200px", "350px"]}
            filter={
              "invert(36%) sepia(82%) saturate(153%) hue-rotate(168deg) brightness(96%) contrast(96%)"
            }
          />
        </Link>
      </Flex>
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
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}

export default Navbar;
