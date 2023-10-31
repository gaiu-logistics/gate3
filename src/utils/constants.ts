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
import bkApp from "@/assets/appsGateway/BkApp.png";
import image1 from "@/assets/slideriamges/1.webp";
import image2 from "@/assets/slideriamges/2.webp";
import image3 from "@/assets/slideriamges/3.webp";
import image4 from "@/assets/slideriamges/4.webp";
import image5 from "@/assets/slideriamges/5.webp";
import image6 from "@/assets/slideriamges/6.webp";
import image7 from "@/assets/slideriamges/7.webp";
import image8 from "@/assets/slideriamges/8.webp";
import image9 from "@/assets/slideriamges/9.webp";
import image10 from "@/assets/slideriamges/10.webp";
import image11 from "@/assets/slideriamges/11.webp";
import image12 from "@/assets/slideriamges/12.webp";
import image13 from "@/assets/slideriamges/13.webp";

export interface SubOption {
  name: string;
  logo: string;
  description?: string;
  authLink?: string;
  disabled?: boolean;
}

export const subOptionsPassport: SubOption[] = [
  {
    name: "Assets",
    logo: assetsLogo,
    description:
      "The Assets App is your Learning Assets store; buy OnWeb3-Passports and other EcoSysMAAT / AlkebulanMeta NFTs that open up exclusive areas in the ecosystem, purchase subscriptions and sponsorship packages to support cooperative learning and secure other advanced learning resources built to advance your success.",
    authLink:
      "https://gate2.alkebulanmeta.network/realms/OnWeb3Keycloak/protocol/openid-connect/auth?client_id=ansAssetsStore&scope=openid%20email%20profile&redirect_uri=https://alkebulanmeta.app&response_type=code&state=T25XZWIzIEtleWNsb2Fr",
    disabled: true,
  },
  {
    name: "Chat",
    logo: chatLogo,
    description:
      "Chat is your secure communications (messaging and multimedia) platform; built on the Element messaging application and the Matrix protocol.",
    authLink:
      "https://gate2.alkebulanmeta.network/realms/OnWeb3Keycloak/protocol/saml?SAMLRequest=hZFNT4NAEIbvJv6Hzd6B5UOBTaGpGmOTmjYt9eClWWBiSWEXd5bany8tNqmJqXOcr%2FeZd0bjQ1OTPWislEyoazNKQBaqrORHQtfZsxXRcTpC0dQtn3RmK5fw2QEa0s9J5KdCQjstuRJYIZeiAeSm4KvJ64x7NuOtVkYVqqZk%2BpTQDQviPPTyICr9MnIZxHdBWRZlUEDpxzGLoYjy0L9nsaDk7czlHbmmiB1MJRohTZ9inm%2B5zPKCzA05izkL3ylZ%2FIg9VHI44RpZPjQhf8myhbWYrzJKJoigTS%2F6qCR2DegV6H1VwHo5S%2BjWmBa54%2BSqs0W9g7yrhWzACFuC%2BVJ654jeIqdRm6MvTr8eDna7bSkZLOSnE%2FSFd9cBxRmGpv9Kj5wLhfT2hvwRQ8%2FvR6bf&RelayState=%2Fauth%2Fmo_saml%2Findex.php",
    disabled: true,
  },
  {
    name: "3D-Play",
    logo: threeDPlayLogo,
    description:
      "3D-Play is our network-state’s multi-dimensional immersive space, our metaverse [in development].",
    disabled: true,
  },
  {
    name: "dLinks",
    logo: Dlinks,
    description:
      "dLinks is your decentralized profile connecting the learning interests you want to share in our cooperative network.",
    disabled: true,
  },
  {
    name: "Media",
    logo: mediaLogo,
    description:
      "Media is our app for making all the media of AlkebulanMeta, that will interest you, accessible; articles, events, online mags, radio, podcasts and our 3D-Play is part of the media too.",
    disabled: true,
  },
  {
    name: "e-Learning",
    logo: elearningLogo,
    description: "e-Learning is your personalised online learning environment.",
    disabled: true,
  },
  {
    name: "DEx",
    logo: dexLogo,
    description:
      "DEx is the official decentralized exchange app for the Alkebulan Network-State [in development].",
    disabled: true,
  },
  {
    name: "Agile",
    logo: aglineLogo,
    description:
      "Agile will help your objective achievement, its intuitive user interface makes project-based learning and project management easier to do well.",
    disabled: true,
  },
  {
    name: "WellPool",
    logo: wellpoolLogo,
    description:
      "WellPool is our Network-State Happiness (“GNH”) Poll, stay on top of your daily wellbeing and get a unique overview to various levels of our communally self-assessed health [in development].",
    disabled: true,
  },
  {
    name: "KICAS-PLA",
    logo: kicasPla,
    description:
      "KICAS-PLA is your Personal Learning Assistant app for the development of KICAS; Knowledge, Insight, Competencies, Abilities and Skills. [in development].",
    disabled: true,
  },
  {
    name: "BKApp",
    logo: bkApp,
    description:
      "BKApp supports members' engagement across our various Meta Readers' Rooms [in development].",
    disabled: true,
  },
];
export const subOptionsNoPassport: SubOption[] = [
  {
    name: "Assets",
    logo: assetsLogo,
    description:
      "The Assets App is your Learning Assets store; buy OnWeb3-Passports and other EcoSysMAAT / AlkebulanMeta NFTs that open up exclusive areas in the ecosystem, purchase subscriptions and sponsorship packages to support cooperative learning and secure other advanced learning resources built to advance your success.",
    authLink:
      "https://gate2.alkebulanmeta.network/realms/OnWeb3Keycloak/protocol/openid-connect/auth?client_id=ansAssetsStore&scope=openid%20email%20profile&redirect_uri=https://alkebulanmeta.app&response_type=code&state=T25XZWIzIEtleWNsb2Fr",
    disabled: false,
  },
  {
    name: "Chat",
    logo: chatLogo,
    description:
      "Chat is your secure communications (messaging and multimedia) platform; built on the Element messaging application and the Matrix protocol.",
    authLink:
      "https://gate2.alkebulanmeta.network/realms/OnWeb3Keycloak/protocol/openid-connect/auth?response_type=code&client_id=ans-chat-app&redirect_uri=https%3A%2F%2Fmatrix.alkebulanmeta.net%2F_synapse%2Fclient%2Foidc%2Fcallback&scope=openid+profile&state=zuq6NjXuzeljsx8wQCgAbUg77LJrjG&nonce=p5dIWfz2fJcVAGsqnTyPqKHEiU2NAT&code_challenge_method=S256&code_challenge=78Zp5jeEpjhGFijLNq59sFTYsDL9RRN38DcGFwdLc1U",
    disabled: false,
  },
  {
    name: "dLinks",
    logo: Dlinks,
    description:
      "dLinks is your decentralized profile connecting the learning interests you want to share in our cooperative network.",
    disabled: true,
  },
];
export const subOptionsTemporary: SubOption[] = [
  {
    name: "Assets",
    logo: assetsLogo,
    description:
      "The Assets App is your Learning Assets store; buy OnWeb3-Passports and other EcoSysMAAT / AlkebulanMeta NFTs that open up exclusive areas in the ecosystem, purchase subscriptions and sponsorship packages to support cooperative learning and secure other advanced learning resources built to advance your success.",
    authLink:
      "https://gate2.alkebulanmeta.network/realms/OnWeb3Keycloak/protocol/openid-connect/auth?client_id=ansAssetsStore&scope=openid%20email%20profile&redirect_uri=https://alkebulanmeta.app&response_type=code&state=T25XZWIzIEtleWNsb2Fr",
    disabled: false,
  },
  {
    name: "Chat",
    logo: chatLogo,
    description:
      "Chat is your secure communications (messaging and multimedia) platform; built on the Element messaging application and the Matrix protocol.",
    authLink:
      "https://gate2.alkebulanmeta.network/realms/OnWeb3Keycloak/protocol/openid-connect/auth?response_type=code&client_id=ans-chat-app&redirect_uri=https%3A%2F%2Fmatrix.alkebulanmeta.net%2F_synapse%2Fclient%2Foidc%2Fcallback&scope=openid+profile&state=zuq6NjXuzeljsx8wQCgAbUg77LJrjG&nonce=p5dIWfz2fJcVAGsqnTyPqKHEiU2NAT&code_challenge_method=S256&code_challenge=78Zp5jeEpjhGFijLNq59sFTYsDL9RRN38DcGFwdLc1U",
    disabled: false,
  },
  {
    name: "e-Learning",
    logo: elearningLogo,
    description: "e-Learning is your personalised online learning environment.",
    authLink:
      "https://gate2.alkebulanmeta.network/realms/OnWeb3Keycloak/protocol/saml?SAMLRequest=hZFNT4NAEIbvJv6Hzd6B5UOBTaGpGmOTmjYt9eClWWBiSWEXd5bany8tNqmJqXOcr%2FeZd0bjQ1OTPWislEyoazNKQBaqrORHQtfZsxXRcTpC0dQtn3RmK5fw2QEa0s9J5KdCQjstuRJYIZeiAeSm4KvJ64x7NuOtVkYVqqZk%2BpTQDQviPPTyICr9MnIZxHdBWRZlUEDpxzGLoYjy0L9nsaDk7czlHbmmiB1MJRohTZ9inm%2B5zPKCzA05izkL3ylZ%2FIg9VHI44RpZPjQhf8myhbWYrzJKJoigTS%2F6qCR2DegV6H1VwHo5S%2BjWmBa54%2BSqs0W9g7yrhWzACFuC%2BVJ654jeIqdRm6MvTr8eDna7bSkZLOSnE%2FSFd9cBxRmGpv9Kj5wLhfT2hvwRQ8%2FvR6bf&RelayState=%2Fauth%2Fmo_saml%2Findex.php",
    disabled: false,
  },
];

export const images: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
];
