import GenericAccordion from "../Global/GenericAccordian";
import SteamupInterests from "./sections/InterestAndCulture/SteamupInterests";
import GeneralInterests from "./sections/InterestAndCulture/GeneralInterests";
import Web6Functions from "./sections/InterestAndCulture/Web6Functions";
import CounteriesOfInterest from "./sections/InterestAndCulture/CounteriesOfInterest";

const accordionItems = [
  {
    title: "STEAM'd uP Interests",
    description: "Science, Tech, Engieering, the Arts & Maths",
    content: <SteamupInterests />,
  },
  {
    title: "General Interests",
    description: "Through four dimensions",
    content: <GeneralInterests />,
  },
  {
    title: "Web6Functions",
    description: "Priorities ordered interests",
    content: <Web6Functions />,
  },
  {
    title: "Countries of Interest",
    content: <CounteriesOfInterest />,
  },
];

const InterestAndCulture = () => {
  return <GenericAccordion items={accordionItems} />;
};

export default InterestAndCulture;
