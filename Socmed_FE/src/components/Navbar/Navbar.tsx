import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import IconNav from "./IconNav";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFeatherAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <Box
      pt={4}
      bg={"#171923"}
      w={"100%"}
      h={"100vh"}
      color={"white"}
      borderRight={"1px solid #555"}
    >
      <HStack color={"green"} px={3}>
        <Heading fontSize={{ base: "0px", lg: "3xl", xl: "4xl" }}>
          CIRCLE
        </Heading>
        <Heading fontSize={{ base: "4xl", lg: "3xl", xl: "4xl" }}>X</Heading>
      </HStack>

      <Box>
        {" "}
        <IconNav />{" "}
      </Box>
      <Box px={2}>
        <Button w={"100%"} borderRadius={"18px"} colorScheme="green">
          <Text display={{ base: "inline-block", md: "none" }}>
            <FaFeatherAlt />
          </Text>{" "}
          <Text display={{ base: "none", md: "inline-block" }}>Post</Text>
        </Button>
      </Box>
      <Link to="/logout">
        <HStack color={"white"} fontSize={"1.3rem"} px={4} mt={200}>
          <Text>
            <CiLogout />
          </Text>{" "}
          <Text
            fontSize={"0.9rem"}
            display={{ base: "none", md: "inline-block" }}
          >
            Logout
          </Text>
        </HStack>
      </Link>
    </Box>
  );
}
