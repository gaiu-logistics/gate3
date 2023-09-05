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
import bkApp from "@/assets/appsGateway/BkApp.png";
export interface SubOption {
  name: string;
  logo: string;
  description?: string;
}

export const subOptionsPassport: SubOption[] = [
  {
    name: "Assets",
    logo: assetsLogo,
    description: "Assets is your Learning Assets store.",
  },
  {
    name: "Chat",
    logo: chatLogo,
    description:
      "Chat is your secure communications (messaging and multimedia) platform.",
  },
  {
    name: "3D-Play",
    logo: threeDPlayLogo,
    description:
      "3D-Play is our network-state’s multi-dimensional immersive space, our metaverse [in development].",
  },
  {
    name: "dLinks",
    logo: Dlinks,
    description:
      "dLinks is your decentralized profile connecting the learning interests you want to share in our cooperative network.",
  },
  {
    name: "Media",
    logo: mediaLogo,
    description:
      "Media is our app for making all the media of AlkebulanMeta, that will interest you, accessible; articles, events, online mags, radio, podcasts and our 3D-Play is part of the media too.",
  },
  {
    name: "E-Learning",
    logo: elearningLogo,
    description: "e-Learning is your personalised online learning environment.",
  },
  {
    name: "Dex",
    logo: dexLogo,
    description:
      "DEx is the official decentralized exchange app for the Alkebulan Network-State [in development].",
  },
  {
    name: "Agile",
    logo: aglineLogo,
    description:
      "Agile will help your objective achievement, its intuitive user interface makes project-based learning and project management easier to do well.",
  },
  {
    name: "Wellpool",
    logo: wellpoolLogo,
    description:
      "WellPool is our Network-State Happiness (“GNH”) Poll, stay on top of your daily wellbeing [in development].",
  },
  {
    name: "Kicas-Pla",
    logo: kicasPla,
    description:
      "KICAS-PLA is our app for the KICAS Personal Learning Account [in development].",
  },
  {
    name: "BKApp",
    logo: bkApp,
    description:
      "BKApp supports members' engagement across our Meta Readers' Rooms [in development].",
  },
];
export const subOptionsNoPassport: SubOption[] = [
  {
    name: "Assets",
    logo: assetsLogo,
    description: "Assets is your Learning Assets store.",
  },
  {
    name: "Chat",
    logo: chatLogo,
    description:
      "Chat is your secure communications (messaging and multimedia) platform.",
  },
  {
    name: "dLinks",
    logo: Dlinks,
    description:
      "dLinks is your decentralized profile connecting the learning interests you want to share in our cooperative network.",
  },
];
