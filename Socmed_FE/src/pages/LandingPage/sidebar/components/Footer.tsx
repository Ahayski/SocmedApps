import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Box
      w={"100%"}
      height={"6.5rem"}
      bg={"#1a202c"}
      px={6}
      py={6}
      mt={4}
      mb={5}
      borderRadius={"20px"}
    >
      <HStack>
        <Heading color={"white"} fontSize={"0.7rem"}>
          {" "}
          Developed by FebryanDeGheans .
        </Heading>
        <HStack>
          <FaGithub size={20} color={"white"} />
          <FaLinkedin size={20} color={"white"} />
          <FaFacebook size={20} color={"white"} />
          <FaInstagram size={20} color={"white"} />
        </HStack>
      </HStack>
      <Text color={"white"} fontSize={"0.6rem"} mt={3}>
        Powered by Dumbways Indonesia. #1 Coding Bootcamp
      </Text>
    </Box>
  );
}

export default Footer;
