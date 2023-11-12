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
  TextProps,
  MenuButtonProps,
  Box,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { CheckIcon, ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
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
const options = ["OnWeb3-Passport", "Temporary-Passcode", "No Passport"];

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
type LoginProps = {
  isAuthenticated: boolean;
  keycloakInstance: any;
};
const Login = ({ isAuthenticated, keycloakInstance }: LoginProps) => {
  console.log(keycloakInstance);
  const [selectedOption, setSelectedOption] = useState("");
  const [subSelectedOption, setSubSelectedOption] = useState<SubOption>();
  const [currentIndex, setCurrentIndex] = useState(() => {
    return Math.floor(Math.random() * images.length);
  });
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    setSubSelectedOption(undefined);
  };

  const handleSuboptionChange = (value: SubOption) => {
    setSubSelectedOption(value);
  };
  const resetAllSelections = () => {
    setSelectedOption("");
  };

  return (
    <div>
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
              <Box position="relative" width="100%">
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
                <Text>{selectedOption || "Login with"}</Text>
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
                  <MenuButton as={Button} {...MenuButtonStyle} w={"full"}>
                    <Text w="full">
                      {subSelectedOption?.name || "Select the app"}
                    </Text>
                    <ChevronDownIcon
                      position={"absolute"}
                      right={"10px"}
                      top={3}
                    />
                  </MenuButton>

                  {keycloakInstance?.idTokenParsed?.hOW3PP ? (
                    <>
                      <Text textAlign={"right"}>
                        Your registered OnWeb3-Passport #:{" "}
                        <Text color={"green.500"}>
                          {keycloakInstance?.idTokenParsed?.hOW3PP}{" "}
                        </Text>
                      </Text>
                    </>
                  ) : (
                    <Box display={"flex"} flexDir={"column"}>
                      <Text mb={"4"} alignSelf={"flex-end"}>
                        You have{" "}
                        <Text color={"red"} display={"inline"}>
                          No Passport registered
                        </Text>{" "}
                      </Text>
                      <Text mb={"8"} alignSelf={"flex-end"} textAlign={"right"}>
                        You need an OnWeb3-Passport for full access to the
                        Alkebulan Network-State: Use the No Passport status to
                        visit our Assets Store at{" "}
                        <a href="alkebulanmeta.app">alkebulanmeta.app</a>,
                        you'll be logged in and able to secure your unique
                        OnWeb3-Passport (NFT). Click on the Assets App now and
                        purchase your personal OnWeb3-Passport asset(s) today.
                      </Text>
                    </Box>
                  )}
                  <MenuList h={"80"} overflowY={"scroll"}>
                    {subOptionsPassport.map((subOption, index) => (
                      <MenuItem
                        _hover={{ bg: "grey.500" }}
                        display={"flex"}
                        justifyContent={"space-between"}
                        key={index}
                        onClick={() => handleSuboptionChange(subOption)}
                        isDisabled={subOption.disabled}
                      >
                        <Text>{subOption.name}</Text>
                        <Image src={subOption.logo} h={"50px"} w={"50px"} />
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <Button
                  onClick={() => {
                    if (keycloakInstance?.idTokenParsed?.hOW3PP?.length > 0) {
                      window.location.href =
                        subSelectedOption?.authLink as string;
                    } else {
                      alert("You don't have a OnWeb3-Passport");
                    }
                  }}
                  fontSize="lg"
                  layerStyle={"base"}
                  bg={"bodyBackground"}
                >
                  <Text>Connect</Text>
                </Button>
                <NotSureSection
                  linkStyle={linksStyle}
                  keycloakInstance={keycloakInstance}
                />{" "}
              </>
            )}
            {selectedOption === "Temporary-Passcode" && (
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
                        isDisabled={subOption.disabled}
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
                  <Flex flex={1} gap={1} mb={8}>
                    <Flex flexDir={"column"} flex={1}>
                      {isAuthenticated ? (
                        <Text textAlign={"right"}>
                          Passcode access approved{" "}
                          <CheckIcon as="span" color={"green.500"} />
                        </Text>
                      ) : (
                        <Text textAlign={"right"}>
                          Passcode access not approved{" "}
                          <CloseIcon as="span" color={"red.500"} />
                        </Text>
                      )}
                    </Flex>
                  </Flex>
                  <Button
                    type="submit"
                    placeSelf={"center"}
                    layerStyle={"base"}
                    w={"100%"}
                    bg={"bodyBackground"}
                    onClick={() => {
                      if (isAuthenticated) {
                        if (subSelectedOption?.authLink) {
                          window.location.href =
                            subSelectedOption?.authLink as string;
                        } else {
                          alert("Please select an app");
                        }
                      } else {
                        alert(
                          "You are not approved for Temporary-Passcode access"
                        );
                      }
                    }}
                  >
                    Log In
                  </Button>
                </FormControl>
                <NotSureSection
                  linkStyle={linksStyle}
                  keycloakInstance={keycloakInstance}
                />{" "}
              </>
            )}
            {selectedOption === "No Passport" && (
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
                    {subOptionsNoPassport.map((subOption, index) => (
                      <MenuItem
                        _hover={{ bg: "grey.500" }}
                        display={"flex"}
                        justifyContent={"space-between"}
                        key={index}
                        onClick={() => handleSuboptionChange(subOption)}
                        isDisabled={subOption.disabled}
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
                  <Button
                    type="submit"
                    placeSelf={"center"}
                    layerStyle={"base"}
                    w={"100%"}
                    bg={"bodyBackground"}
                    onClick={() => {
                      window.location.href =
                        subSelectedOption?.authLink as string;
                    }}
                  >
                    Connect
                  </Button>
                </FormControl>
                <NotSureSection
                  linkStyle={linksStyle}
                  keycloakInstance={keycloakInstance}
                />
              </>
            )}
          </Flex>
        </Flex>
      </>
    </div>
  );
};

export default Login;
