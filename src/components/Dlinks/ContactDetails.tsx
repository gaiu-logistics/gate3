import GenericAccordion from "../Global/GenericAccordian";
import Identity from "./sections/ContactDetails/Identity";
import Web3AssetsWallets from "./sections/ContactDetails/Web3AssetsWallets";
const accordionItems = [
  {
    title: "Identity",
    content: <Identity />,
  },
  {
    title: "Web3 Cryptoasset Wallets",
    content: <Web3AssetsWallets />,
  },
];
const ContactDetails = () => {
  return <GenericAccordion items={accordionItems} />;
};

export default ContactDetails;
