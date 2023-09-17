import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export function App() {
  return (
    <Flex flexDirection="column" maxHeight="100vh">
      <Flex py={"1.5rem"} flex="1">
        <Outlet />
      </Flex>
    </Flex>
  );
}
