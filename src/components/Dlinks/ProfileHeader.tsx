import { Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Dlinks from "@/assets/appsGateway/Icons-16 dlinks.png";
import GenericTabs from "../Global/GenericTabs";
import ContactDetails from "./ContactDetails";
import InterestAndCulture from "./InterestAndCulture";
import SocialLinks from "./SocialLinks";
import MoreInsights from "./MoreInsights";
import FullScreenImage from "../Global/FullScreenImage";

const tabs = [
  {
    label: "Contact Details",
    content: <ContactDetails />,
  },
  {
    label: "Interest & Culture",
    content: <InterestAndCulture />,
  },
  {
    label: "Social Links",
    content: <SocialLinks />,
  },
  {
    label: "More Insights",
    content: <MoreInsights />,
  },
];

const ProfileHeader = () => {
  return (
    <>
      <SimpleGrid
        bg={"white"}
        columns={[2, 2, 2, 3]}
        minH={"50vh"}
        pt={10}
        mb={10}
        px={[2, 10, 20]}
        alignContent={"center"}
      >
        <VStack p={[2, 10, 10, 20]} order={[2, 2, 2, 0]} gap={20}>
          <FullScreenImage imageUrl={Dlinks} />
          <Button>Share</Button>
        </VStack>
        <VStack p={[0, 10, 10, 20]}>
          <FullScreenImage imageUrl={Dlinks} />
          <Text>
            Passport Ref: <Text as={"b"}>1st gen 400</Text>
          </Text>
          <Text>
            Your OnWeb3 Status is <Text as={"b"}>2:9</Text>
          </Text>
        </VStack>
        <VStack>
          <FullScreenImage imageUrl={Dlinks} />
          <Text placeSelf={"end"}>User Name</Text>
        </VStack>
      </SimpleGrid>
      <GenericTabs tabs={tabs} />
    </>
  );
};

export default ProfileHeader;
