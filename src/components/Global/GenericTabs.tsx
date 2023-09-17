import React, { useState } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type GenericTabsProps = {
  tabs: TabItem[];
};

const GenericTabs: React.FC<GenericTabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <Tabs
      isFitted
      minH={"50vh"}
      size="md"
      variant={"unstyled"}
      index={selectedTab}
      layerStyle={"base"}
      onChange={handleTabChange}
    >
      <TabList gap={4} flexDir={["column", "column", "row"]}>
        {tabs.map((tab, index) => (
          <Tab
            py={2}
            px={4}
            key={index}
            fontSize={"xl"}
            layerStyle={"tab"}
            _selected={{
              bg: "textBody",
              color: "white",
              borderBottom: "4px plum solid",
              fontWeight: "bold",
            }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels mt={10}>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            <Box p={[0, 2, 2, 4]}>{tab.content}</Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default GenericTabs;
