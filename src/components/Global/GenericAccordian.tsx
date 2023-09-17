import React, { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

type AccordionItem = {
  title: string;
  description?: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

const GenericAccordion: React.FC<AccordionProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(null); // Close the currently open item
    } else {
      setSelectedIndex(index); // Open the clicked item
    }
  };

  return (
    <Accordion allowMultiple>
      {items.map((item, index) => (
        <AccordionItem key={index} mb={4}>
          {({ isExpanded }) => (
            <>
              <AccordionButton
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                borderLeft={"4px plum solid"}
                _hover={{ bg: "textBody", color: "bodyBackground" }}
                bg={isExpanded ? "textBody" : "bodyBackground"}
                color={isExpanded ? "bodyBackground" : "textBody"}
                textAlign={"left"}
                p={[2, 4, 4, 8]}
                onClick={() => toggleItem(index)}
                role="group"
              >
                <Box fontSize={["sm", "md", "lg", "2xl"]} fontWeight={"bold"}>
                  {item.title}
                </Box>
                <Text
                  fontSize={["xs", "sm", "md", "2xl"]}
                  _groupHover={{ color: "bodyBackground" }}
                >
                  {item.description}
                </Text>
                {isExpanded ? <MinusIcon /> : <AddIcon />}
              </AccordionButton>
              <AccordionPanel borderTopWidth={1} py={10}>
                {item.content}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default GenericAccordion;
