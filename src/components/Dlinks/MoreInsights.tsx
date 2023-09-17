import { Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

const insights = [
  {
    title: "Level Being 9 Apiary",
    description: (
      <Text>
        Level Being 9 Apiary is interested in all things to do with the STEM and
        Art of beekeeping. We are developing a directory and networking forum of
        beekeeping organisation and practitioners panAfrica. [
        <a href="https://www.google.com">See My Enchance dLinks Profile</a>]
      </Text>
    ),
  },
  {
    title: "Community Science Lab",
    description: (
      <Text>
        uLearn Naturally Community Science Lab seeks to establish community
        based learning centres focused on STEM, explored in culturally inclusive
        and engaging ways. Community Science Labs will focus on; a) Communal
        science lab facilities - made accessible to all, b) Space observatory -
        telescopes and radio, c) STEM Open Learning Resource rooms, d)
        Planetarium - VR and immersive projections, e) Lab cafe - light
        edutainment spaces. [
        <a href="https://www.google.com">See My Enhance dLinks Profile</a>]
      </Text>
    ),
  },
  {
    title: "Creators’ Hubs",
    description: (
      <Text>
        We will be developing a localised learners cooperative hubs around STEM
        and the first pilot project “DIY Build A Recumbent Trike project”. This
        project will involve learners in design (CAD), metalworking (frame
        building), general recumbent trike construction to point of completion,
        quality testing and naturally, in cycling. The main intention being
        about engaging children, youth and adults in transferable STEM
        competency development in the context of environmental awareness and the
        advancement of healthful (more sustainable) ways of travelling. [
        <a href="https://www.google.com">See My Enhance dLinks Profile</a>]
      </Text>
    ),
  },
  {
    title: "DopA - Directory of panAfrica",
    description: (
      <Text>
        We are developing a directory and networking forum of panAfrican
        Organisations and Coordinators. [
        <a href="https://www.google.com">See My Enhance dLinks Profile</a>]
      </Text>
    ),
  },
];

const MoreInsights = () => {
  return (
    <Grid templateColumns={["1fr", "1fr 1fr"]} gap={6}>
      <GridItem order={[2, 0, 0, 0]}>
        {insights.map((item, index) => (
          <VStack key={index} alignItems={"start"} my={10}>
            <Heading>{item.title}</Heading>
            {item.description}
          </VStack>
        ))}
      </GridItem>

      <GridItem justifySelf={"end"} w={"100%"}>
        <iframe
          id="embed_player"
          width="100%"
          height="400px"
          src="https://ulearn.airtime.pro/embed/player?stream=auto&skin=2"
        ></iframe>

        <Text fontWeight={"bold"} textAlign={"right"}>
          Listen to OnWeb3 Radio Now
        </Text>
      </GridItem>
    </Grid>
  );
};

export default MoreInsights;
