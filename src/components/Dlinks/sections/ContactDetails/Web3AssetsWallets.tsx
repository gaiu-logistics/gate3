import { Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
const textContent = [
  {
    blockchain: "Solana",
    address: "n1nuyGWwaNy9Q97qrGH7LseoFGkhuc5Fa8",
    qrCode:
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAM0AAADNAQAAAAAzx8nEAAABvklEQVR4nO2XsY3DMAxFGaRQ6RG8SbyYARnQYvEmGsGlC8O8/8k458shLVUkKoxETwVB/k9Rou/WKl/08WgRkYtust66gg0Z8V9yPMqqs059usu18lBve+FolDQvY49d1XTvNvxqhRjXzJTdZGyIlqvqzlINSyvEerl2Jor5tZRRiLuIy4rGz4uwg5AvBLeL9HDSP5sHoaKsV9V7V6oMWipU1AJVxDXJKt0mcLXi0JGoQASJuFzZ2VAq6rjTcIRSJWrn4WXwdKg3Ei25Wly0sSQauglCizeeKBvr+OvlkE0swu7Us7e6mHVug7B7Ve8mA4p2TlQg8hkANkaOzEnPlhKJUCVlS5lpJwgI1v61eRhCetBDRkxEZmN8EKaGo4eXe0uUchSBk3I4wvUP15RqEmasPKTxCNEMuPlXlipZ5U69NwxBuLzwvErCD2JtgtJjJrMZ4HwFBCJkBsEVn0dsnWQTh2zRxgPHIl7/8jRRIPIJtbhYfFLcW6DM+8UdjMEMf9sgfztY0aoNJcabIESIYcjmQ7wd/kQYiuBgc/XsAmqAWC+IBcK1x0zmoQboeMvxcenv7We9AtGb9UWfjn4A9P8EP2Cnb7EAAAAASUVORK5CYII=",
  },
  {
    blockchain: "Bitcoin",
    address: "n1nuyGWwaNy9Q97qrGH7LseoFGkhuc5Fa8",
    qrCode:
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAM0AAADNAQAAAAAzx8nEAAABvklEQVR4nO2XsY3DMAxFGaRQ6RG8SbyYARnQYvEmGsGlC8O8/8k458shLVUkKoxETwVB/k9Rou/WKl/08WgRkYtust66gg0Z8V9yPMqqs059usu18lBve+FolDQvY49d1XTvNvxqhRjXzJTdZGyIlqvqzlINSyvEerl2Jor5tZRRiLuIy4rGz4uwg5AvBLeL9HDSP5sHoaKsV9V7V6oMWipU1AJVxDXJKt0mcLXi0JGoQASJuFzZ2VAq6rjTcIRSJWrn4WXwdKg3Ei25Wly0sSQauglCizeeKBvr+OvlkE0swu7Us7e6mHVug7B7Ve8mA4p2TlQg8hkANkaOzEnPlhKJUCVlS5lpJwgI1v61eRhCetBDRkxEZmN8EKaGo4eXe0uUchSBk3I4wvUP15RqEmasPKTxCNEMuPlXlipZ5U69NwxBuLzwvErCD2JtgtJjJrMZ4HwFBCJkBsEVn0dsnWQTh2zRxgPHIl7/8jRRIPIJtbhYfFLcW6DM+8UdjMEMf9sgfztY0aoNJcabIESIYcjmQ7wd/kQYiuBgc/XsAmqAWC+IBcK1x0zmoQboeMvxcenv7We9AtGb9UWfjn4A9P8EP2Cnb7EAAAAASUVORK5CYII=",
  },
];
const Web3AssetsWallets = () => {
  return (
    <VStack alignItems={"flex-start"}>
      <Heading>Web3 Cryptoasset Wallets:</Heading>
      <SimpleGrid
        columns={[1, 1, 1, 3]}
        spacingY={10}
        w={"100%"}
        alignItems={"center"}
        fontWeight={"bold"}
        display={["none", "none", "none", "grid"]}
      >
        {" "}
        <Text>Blockchain:</Text>
        <Text>Wallet Address:</Text>
        <Text placeSelf={["center", "center", "center", "end"]}>QR Code:</Text>
      </SimpleGrid>

      {textContent.map((item, index) => (
        <SimpleGrid
          columns={[1, 1, 1, 3]}
          spacingY={10}
          key={index}
          w={"100%"}
          alignItems={"center"}
        >
          <Text>{item.blockchain}</Text>
          <Text>{item.address}</Text>
          <Image
            placeSelf={["center", "center", "center", "end"]}
            src={item.qrCode}
          />
          <hr />
        </SimpleGrid>
      ))}
    </VStack>
  );
};
export default Web3AssetsWallets;
