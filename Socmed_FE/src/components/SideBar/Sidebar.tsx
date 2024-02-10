import { Box } from "@chakra-ui/react";
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import Footer from "./Footer";

function Sidebar() {
  return (
    <Box
      w={"100%"}
      h={"100%"}
      bg={"#171923"}
      borderLeft={"1px solid #555"}
      px={8}
      py={5}
    >
      <Profile />

      <Suggestion />
      <Footer />
    </Box>
  );
}

export default Sidebar;
