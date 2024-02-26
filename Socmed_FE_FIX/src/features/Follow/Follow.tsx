import {
  Box,
  HStack,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Follow = () => {
  return (
    <Box bg={"#171923"} height={"full"}>
      <HStack pt={5} pl={4}>
        <Link to={"/"}>
          <IoArrowBack size={24} />
        </Link>
        <Heading fontSize={"2rem"}>Followers</Heading>
      </HStack>
      <Tabs isFitted pt={3}>
        <TabList>
          <Tab>Followers</Tab>
          <Tab>Followings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Followers</p>
          </TabPanel>
          <TabPanel>
            <p>Followings</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
