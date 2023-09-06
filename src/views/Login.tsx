import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Flex,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Input,
  TextProps,
  MenuButtonProps,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import NotSureSection from "../components/Login/NotSureSection";
import {
  SubOption,
  subOptionsNoPassport,
  subOptionsPassport,
} from "../utils/constants";
import LoginLogo from "@/assets/loginIcon.png";
import Navbar from "../layout/Navbar";

const options = ["OnWeb3-Passport", "No Passport"];

// const settings = {
//   apiKey: "BGwPIJelIpcE-ssfDVYL8Y3d9AR2_9GO", // Replace with your Alchemy API Key.
//   network: Network.ETH_MAINNET, // Replace with your network.
// };

const linksStyle: TextProps = {
  textDecoration: "underline",
  color: "textBody",
};

const MenuButtonStyle: MenuButtonProps = {
  bg: "bodyBackground",
  layerStyle: "base",
  position: "relative",
  fontSize: "lg",
};
const Login = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [subSelectedOption, setSubSelectedOption] = useState<SubOption>();

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSuboptionChange = (value: SubOption) => {
    setSubSelectedOption(value);
  };

  return (
    <>
      <Navbar />
      <Flex
        direction={["column", "column", "row"]}
        flex={1}
        mt={"3rem"}
        bg={"bodyBackground"}
      >
        <Flex
          layerStyle={"base"}
          direction={"column"}
          p={[2, 4]}
          mr={["0", "0", "5%"]}
          mb={["5%", "5%", "0"]}
          minW={["100%", "50%"]}
          justify={"center"}
        >
          {subSelectedOption ? (
            <>
              <Image
                maxH={"15rem"}
                objectFit={"contain"}
                src={subSelectedOption?.logo}
                alt="Alkebulan Logo"
              />
              <Text textAlign={"center"} py={[5, 10]}>
                {subSelectedOption?.description}
              </Text>
            </>
          ) : (
            <>
              <Image
                objectFit={"contain"}
                src={LoginLogo}
                alt="Alkebulan Logo"
                h={"100%"}
                w={"100%"}
              />
            </>
          )}
        </Flex>

        <Flex
          layerStyle={"base"}
          p={[5, 10]}
          flexDir={"column"}
          minW={["100%", "50%"]}
          gap="10"
        >
          <Heading>STATUS</Heading>
          <Menu>
            <MenuButton as={Button} {...MenuButtonStyle}>
              <Text>{selectedOption || "Select an option"}</Text>
              <ChevronDownIcon position={"absolute"} right={"10px"} top={3} />
            </MenuButton>
            <MenuList>
              {options.map((option, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          {selectedOption === "OnWeb3-Passport" && (
            <>
              <Heading>Focus</Heading>

              <Menu>
                <MenuButton as={Button} {...MenuButtonStyle}>
                  <Text>{subSelectedOption?.name || "Select the app"}</Text>
                  <ChevronDownIcon
                    position={"absolute"}
                    right={"10px"}
                    top={3}
                  />
                </MenuButton>
                <MenuList h={"80"} overflowY={"scroll"}>
                  {subOptionsPassport.map((subOption, index) => (
                    <MenuItem
                      _hover={{ bg: "grey.500" }}
                      display={"flex"}
                      justifyContent={"space-between"}
                      key={index}
                      onClick={() => handleSuboptionChange(subOption)}
                    >
                      <Text>{subOption.name}</Text>
                      <Image src={subOption.logo} h={"50px"} w={"50px"} />
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Button fontSize="lg" layerStyle={"base"} bg={"bodyBackground"}>
                <Text>Connect</Text>
              </Button>
              <NotSureSection linkStyle={linksStyle} />
            </>
          )}

          {selectedOption === "No Passport" && (
            <>
              <Heading>Focus</Heading>

              <Menu>
                <MenuButton as={Button} {...MenuButtonStyle}>
                  {subSelectedOption?.name || "Select the app"}
                </MenuButton>
                <MenuList>
                  {subOptionsNoPassport.map((subOption, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleSuboptionChange(subOption)}
                    >
                      {subOption.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <FormControl
                layerStyle={"base"}
                p={6}
                fontSize={"lg"}
                display={"flex"}
                flexDirection={"column"}
              >
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  mb={2}
                  borderColor={"textBody"}
                  borderWidth={1}
                />

                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  mb={4}
                  borderColor={"textBody"}
                  borderWidth={1}
                />

                <Button
                  type="submit"
                  placeSelf={"center"}
                  layerStyle={"base"}
                  w={"100%"}
                  bg={"bodyBackground"}
                >
                  Log In
                </Button>
              </FormControl>
              <NotSureSection linkStyle={linksStyle} />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
