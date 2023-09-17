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
  Box,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import NotSureSection from "../components/Login/NotSureSection";
import {
  SubOption,
  images,
  subOptionsNoPassport,
  subOptionsPassport,
} from "../utils/constants";
import LoginLogo from "@/assets/loginIcon.png";
import Navbar from "../layout/Navbar";
import Carousel from "../components/Login/Carousel";
import { useNavigate } from "react-router-dom";

const options = ["OnWeb3-Passport", "Temporary-Passcode", "No Passport"];
// const options = ["OnWeb3-Passport", "No Passport", "Temporary-Passcode"];

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
  const [currentIndex, setCurrentIndex] = useState(() => {
    return Math.floor(Math.random() * images.length);
  });

  const navigate = useNavigate();
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSuboptionChange = (value: SubOption) => {
    setSubSelectedOption(value);
  };
  const resetAllSelections = () => {
    setSelectedOption("");
  };

  return (
    <>
      <Navbar resetAllSelections={resetAllSelections} />
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
          {selectedOption.length > 0 && subSelectedOption ? (
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
            <Box
              position="relative"
              width="100%"
              onClick={() => {
                navigate("/dLinks");
              }}
            >
              <Carousel
                images={images}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
              <Center
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                pointerEvents="none"
                bg={"bodyBackground"}
                opacity={0.5}
              >
                <Image
                  src={LoginLogo} // Replace with the URL of your overlay image
                  alt="Overlay Image"
                  maxW="100%"
                  maxH="100%"
                  objectFit="contain" // Adjust the image sizing as needed
                />
              </Center>
            </Box>
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
          {selectedOption === "Temporary-Passcode" && (
            <>
              <Heading>Focus</Heading>

              <Menu>
                <MenuButton as={Button} {...MenuButtonStyle}>
                  {subSelectedOption?.name || "Select the app"}
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

                <Flex flex={1} gap={1}>
                  <Flex flexDir={"column"} flex={1}>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      mb={4}
                      borderColor={"textBody"}
                      borderWidth={1}
                    />
                  </Flex>
                  <Flex flexDir={"column"} flex={1}>
                    <FormLabel>Passcode</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your passcode"
                      mb={4}
                      borderColor={"textBody"}
                      borderWidth={1}
                    />
                  </Flex>
                </Flex>

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

          {selectedOption === "No Passport" && (
            <>
              <Heading>Focus</Heading>

              <Menu>
                <MenuButton as={Button} {...MenuButtonStyle}>
                  {subSelectedOption?.name || "Select the app"}
                </MenuButton>
                <MenuList h={"80"} overflowY={"scroll"}>
                  {subOptionsNoPassport.map((subOption, index) => (
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
