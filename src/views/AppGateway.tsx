declare global {
  interface Window {
    solana: Phantom;
  }
}
interface Phantom {
  isPhantom: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  on: (event: Event | string, callback: (e: Event) => void) => void;
}
import {
  Box,
  Flex,
  Heading,
  Image,
  TabIndicator,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  ImageProps,
  BoxProps,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  Button,
} from "@chakra-ui/react";
import logo from "@/assets/appsGateway/Icons-08 gateway.png";
import assetsLogo from "@/assets/appsGateway/Icons-01 assets.png";
import chatLogo from "@/assets/appsGateway/Icons-03 chat.png";
import threeDPlayLogo from "@/assets/appsGateway/Icons-05 play.png";
import Dlinks from "@/assets/appsGateway/Icons-16 dlinks.png";
import mediaLogo from "@/assets/appsGateway/Icons-02 media.png";
import elearningLogo from "@/assets/appsGateway/Icons-06 e-learning.png";
import dexLogo from "@/assets/appsGateway/Icons-07 dex.png";
import aglineLogo from "@/assets/appsGateway/Icons-04 agile.png";
import wellpoolLogo from "@/assets/appsGateway/Icons-22 wellpool.png";
import kicasPla from "@/assets/appsGateway/Icons-21 kicas-pla.png";
import kicasBanner from "@/assets/appsGateway/kicasBanner.jpg";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { Web3Button } from "@web3modal/react";
import { useEffect, useState } from "react";

const TabsArray = [
  "Assets",
  "Chat",
  "3D Play",
  "Dlinks",
  "Media",
  "E-Learning",
  "DEx",
  "Agile",
  "Wellpool",
  "KICAS PLA",
];
const panelStyle: BoxProps = {
  borderBottom: "4px",
  borderLeft: "4px",
  borderRight: "4px",
  borderTop: "0px",
  borderColor: "black",
  display: "flex",
  gap: 10,
  flexDirection: "column",
};
const imageStyle: ImageProps = {
  objectFit: "contain",
  maxW: "100%",
  maxH: "100%",
};
const AppGateway = () => {
  const tabsContent = [
    {
      name: "Assets",
      image: assetsLogo,
      text: (
        <Text lineHeight={"10"}>
          Assets is your Learning Assets store. This app allows you to easily
          buy the web3 assets you’ll need to fully access, enjoy and
          self-develop on the AlkebulanMeta platform.
          <br />
          App Domain:{" "}
          <Link color={"blue.500"} to="https://alkebulanmeta.app">
            https://alkebulanmeta.app
          </Link>
        </Text>
      ),
    },
    {
      name: "Chat",
      image: chatLogo,
      text: (
        <Text lineHeight={"10"}>
          Chat is your secure communications (messaging and multimedia)
          platform. Built on Element Messenger and the Matrix Communications
          Protocol, our Chat app is secure and compliant, protecting and
          strengthening personal and professional communications. It gives you
          control of your data, open source and flexible to enable data
          sovereignty. Connects [KICAS] globally and locally in real-time across
          dynamic learning networks of individuals, groups (cooperative), and
          Network-State partners.
          <br />
          App Domain:{" "}
          <Link color={"blue.500"} to="https://3d.alkebulanmeta.app">
            https://3d.alkebulanmeta.app{" "}
          </Link>
        </Text>
      ),
    },
    {
      name: "3D Play",
      image: threeDPlayLogo,
      text: (
        <Text lineHeight={"10"}>
          3D-Play is our network-state’s virtual home, our metaverse. Built on
          Third Room and Unity, our 3D-Play app is a virtual space for our
          citizens to gather, learn, share, play, and collaborate. You can host
          events and meetups, play in the Mantis Memory Matrix (mind mapping and
          goal achievement tool) or just hang out and chat. 3D-Play allows you
          to dive into rich 3D experiences together. 3D-Play is in alpha
          development.
          <br />
          App Domain:{" "}
          <Link color={"blue.500"} to="https://3d.alkebulanmeta.app">
            https://3d.alkebulanmeta.app
          </Link>
          <br />
          <Text fontWeight={"bold"} as={"span"}>
            Feel the flow:{" "}
            <Link color={"blue.500"} to="https://3d.alkebulanmeta.app">
              [Taster-1]{" "}
            </Link>
            <Link
              color={"blue.500"}
              to="https://vimeo.com/alkebulanmeta/khepera-3d-design-preview"
            >
              [Taster-2]{" "}
            </Link>
            <Link
              color={"blue.500"}
              to="https://vimeo.com/alkebulanmeta/preview-the-3d-play-space"
            >
              [Taster-3]{" "}
            </Link>
          </Text>
        </Text>
      ),
    },
    {
      name: "dLinks",
      image: Dlinks,
      text: (
        <Text>
          dLinks is your decentralized profile connecting the learning interests
          you want to share in our cooperative network.
          <br />
          Every citizen of Alkebulan Network-State will receive a Handshake
          related domain (SubLevelDomain) that is compatible with the existing
          Domain Name Server (DNS) system. However, the DNS of AlkebulanMeta
          instead decentralizes the root zone file where TopLevelDomain
          ownership information is stored using the distributed and
          decentralized blockchain-based system of Handshake.org; no one
          controls and anyone can use this. This allows for a domain root zone
          that is uncensorable, permissionless, and free of gatekeepers like
          ICANN.
          <br />
          We are developing the full utility of Handshake TLDs into our
          Handshake SLDs and giving them to every citizen. This will be the root
          URL (link) to your dLinks Profile thereby giving you an online
          personal profile that is uncensorable, permissionless, and free of
          gatekeepers. This is in the alpha stage of development.
        </Text>
      ),
    },
    {
      name: "Media",
      image: mediaLogo,
      text: (
        <Text>
          Media is our app for making all the media of AlkebulanMeta, that will
          interest you, accessible; articles, events, online mags, radio,
          podcasts and our 3D-Play is part of the media too.
          <br />
          Storytelling is the secret spice of life across Alkebulan
          Network-State, citizens will have exclusive access to great stories
          that share STEM insight from an African place of being. Have you heard
          our first epic story? It’s a deeply meaningful classic for both
          children and adults, listen to it now.
          <br />
          App Domain:{" "}
          <Link color={"blue.500"} to="https://media.alkebulanmeta.network/">
            https://media.alkebulanmeta.network/
          </Link>
        </Text>
      ),
    },
    {
      name: "E-Learning",
      image: elearningLogo,
      text: (
        <Text>
          e-Learning is your personalised online learning environment.
          <br />
          e-Learning is built on the Moodle learning platform which is designed
          to provide educators, administrators, and learners with a single
          robust, secure and integrated system to create personalised learning
          environments.
          <br />
          You can join existing courses you can create courses. We’ve made
          unique integrations with our Chat app and our Agile (project
          management) app so that you and the collectives you work with have a
          world-class learning experience.
          <br />
          App Domain:{" "}
          <Link color={"blue.500"} to="https://bou.alkebulanmeta.network/">
            https://bou.alkebulanmeta.network/
          </Link>
        </Text>
      ),
    },
    {
      name: "DEx",
      image: dexLogo,
      text: (
        <Text>
          DEx is the official decentralized exchange app for the Alkebulan
          Network-State.
          <br />
          A decentralized exchange (better known as a DEX) is a peer-to-peer
          marketplace where cryptoasset (NFT and other token) transactions occur
          directly between citizens, cooperatives, and projects on the
          AlkebulanMeta platform. DExs fulfill one of web3’s core possibilities:
          fostering value transactions that aren’t officiated by banks, brokers,
          payment processors, or any other kind of intermediary.
          <br />
          On our roadmap is the development of a decentralized exchange for the
          cryptoassets of the EcoSysMAAT ecosystem (this includes the
          cryptoasset exchange requirements of Alkebulan Network-State). The
          EcoSysMAAT DEx will be built on our own blockchain, built on the
          Cosmos SDK.
          <br />
          This application is in development.
          <br />
          App Domain:{" "}
          <Link color={"blue.500"} to="https://dex.alkebulanmeta.network/">
            https://dex.alkebulanmeta.network/
          </Link>
        </Text>
      ),
    },
    {
      name: "Agile",
      image: aglineLogo,
      text: (
        <Text>
          Agile will help your objective achievement, its intuitive user
          interface makes project-based learning and project management easier
          to do well.
          <br />
          Our Agile app is built on Taiga which is a feature-rich open-source
          project management software for cross-functional teams that work agile
          across both scrum and kanban frameworks. “scrum and kanban” are types
          of project management approach and we have adapted the Kanban approach
          to support our learners and cooperatives with their personal,
          professional, and group objective achievement.
          <br />
          App Domain:{" "}
          <Link color={"blue.500"} to="https://agile.alkebulanmeta.network/">
            https://agile.alkebulanmeta.network/
          </Link>
        </Text>
      ),
    },
    {
      name: "Wellpool",
      image: wellpoolLogo,
      text: (
        <Text>
          WellPool is our Network-State Happiness (“GNH”) Poll, stay on top of
          your daily wellbeing.
          <br />
          In order to foster a value for the measurement of a holistic range of
          “Gross National Happiness” values, a domain-based framework has been
          adopted by EcoSysMAAT, we give thanks to the Centre for Bhutan & GNH
          Studies and the Bhutan governance structure for this wonderful tool.
          <Link to="http://www.grossnationalhappiness.com/">
            http://www.grossnationalhappiness.com/
          </Link>
          <br />
          The framework contains nine constituent domains of GNH. They are:
          psychological wellbeing, health, time use and balance, education,
          cultural diversity and resilience, good governance, community
          vitality, ecological diversity and resilience, and living standard.
          <br />
          It will be noticed from the breadth of domains that a good number of
          them, like balanced time use, psychological wellbeing, community
          vitality, and cultural diversity are fairly independent of income and
          material consumption. By using these, the definition and content of
          the concept of wellbeing and happiness becomes multi-dimensional.
          <br />
          This application is in development.
          <br />
          App Domain:{" "}
          <Link
            color={"blue.500"}
            to={{ pathname: "https://wellpool.apps.alkebulanmeta.network/" }}
            target="_blank"
          >
            https://wellpool.apps.alkebulanmeta.network/
          </Link>
        </Text>
      ),
    },
    {
      name: "KICAS PLA",
      image: kicasPla,
      text: (
        <Text>
          KICAS PLA is our app for the KICAS Personal Learning Account.
          <br />
          The KICAS Builder Personal Learning Assistant is a web3 and AI
          augmented learning assistant that you can call on for assistance
          across all areas of learning and life in AlkebulanMeta. You will
          receive personalized support to greatly improve the quality of
          learning you get from the other apps, services, and networks of
          AlkebulanMata. Why use just 10% of your capacity when you know you can
          know more?
          <br />
          This application is in development.
          <br />
          App Domain:{" "}
          <Link
            color={"blue.500"}
            to="https://kicas.apps.alkebulanmeta.network/"
          >
            https://kicas.apps.alkebulanmeta.network/
          </Link>
        </Text>
      ),
    },
  ];

  const { isConnected } = useAccount();
  const [phantom, setPhantom] = useState<Phantom | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (window["solana"]?.isPhantom) {
      setPhantom(window["solana"]);
    }
  }, []);
  useEffect(() => {
    phantom?.on("connect", (e) => {
      setConnected(true);
      console.log(e);
    });

    phantom?.on("disconnect", () => {
      setConnected(false);
    });
  }, [phantom]);
  console.log("[hantom]");
  console.log(connected);
  if (isConnected) {
    return (
      <Flex
        flexDir={"column"}
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        gap={[5, 10]}
      >
        <Box maxH={"80"}>
          <Image
            objectFit={"cover"}
            src={logo}
            alt="Alkebulan Logo"
            h={"100%"}
          />
        </Box>
        <Heading>Unleash your potential</Heading>
        <Web3Button />
        {/* <Button
          onClick={() => {
            phantom?.connect();
          }}
        >
          Connect to phanton
        </Button>
        <Button
          onClick={() => {
            phantom?.disconnect();
          }}
        >
          disconnect to phanton
        </Button> */}
      </Flex>
    );
  }

  return (
    <Flex flexDir={"column"}>
      <Heading size={["md", "lg"]} my={10}>
        App Gateway
      </Heading>
      <Flex
        gap={10}
        flexDirection="column"
        flexDir={"column"}
        alignItems={"center"}
        layerStyle={"base"}
        p={[5, 10]}
      >
        <Box maxH={"80"}>
          <Image
            objectFit={"cover"}
            src={logo}
            alt="Alkebulan Logo"
            h={"100%"}
          />
        </Box>
        <Text variant={"links"}>Access | Power | Learning | Assets</Text>
      </Flex>
      <Flex wrap={"wrap"} mt={10} layerStyle={"base"} p={[5, 10]}>
        {tabsContent.map((item, index) => (
          <Box flexBasis={"50%"} key={index} maxH={"60"}>
            <Link
              to={"/login"}
              state={{
                app: item.name,
              }}
            >
              <Image
                mx={"auto"}
                h="100%"
                objectFit={"cover"}
                src={item.image}
                alt="Alkebulan Logo"
              />
            </Link>
          </Box>
        ))}
      </Flex>
      <Tabs
        mt={10}
        position="relative"
        variant={"unstyled"}
        display={{
          base: "none",
          sm: "block",
        }}
      >
        <TabList display={"flex"} justifyContent={"center"}>
          {TabsArray.map((tab, index) => (
            <Tab
              key={index}
              _selected={{
                bgColor: "white",
                borderColor: "black",
                borderTop: "4px",
                borderLeft: "4px",
                borderRight: "4px",
                borderBottom: "0px",
              }}
              bgColor={"accentLightGreen"}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabIndicator bg="white" height={"4px"} mt="0" />
        <TabPanels borderTop={"4px"}>
          {tabsContent.map((content, index) => (
            <TabPanel
              layerStyle={"base"}
              borderRadius={"0px"}
              key={index}
              {...panelStyle}
            >
              <Flex maxH={"60"}>
                <Image src={content.image} {...imageStyle} />
              </Flex>
              {content.text}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Accordion
        mt={10}
        display={{
          base: "block",
          sm: "none",
        }}
        _expanded={{
          bg: "bodyBackground",
        }}
      >
        {tabsContent.map((tab, index) => (
          <AccordionItem key={index}>
            <AccordionButton
              border={"2px solid"}
              bg={"accentLightGreen"}
              _expanded={{
                bg: "bodyBackground",
              }}
            >
              <Box flex="1" textAlign="left">
                {tab.name} {/* Replace with your tab title */}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Flex maxH={"60"}>
                <Image src={tab.image} {...imageStyle} />{" "}
              </Flex>
              {tab.text}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Box flexBasis={"50%"} maxH={"60"} mt={10}>
        <Image
          mx={"auto"}
          h="100%"
          objectFit={"cover"}
          src={assetsLogo}
          alt="Alkebulan Logo"
        />
      </Box>
      <Link to="https://alkebulanmeta.app" target="_blank">
        <Text
          mt={10}
          color={"blue.500"}
          fontWeight={"bold"}
          textDecor={"underline"}
          textAlign={"center"}
        >
          Secure your Character IDs - NOW
        </Text>
      </Link>
      <Text textAlign={"center"} mt={10}>
        Augment your ID wth Web3
      </Text>
    </Flex>
  );
};

export default AppGateway;
