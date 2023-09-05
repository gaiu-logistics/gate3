import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Flex } from "@chakra-ui/react";

export function App() {
  return (
    <Flex flexDirection="column" maxHeight="100vh">
      <Navbar />

      <Flex py={"1.5rem"} flex="1">
        <Outlet />
      </Flex>

      <Footer />
    </Flex>
  );
}
