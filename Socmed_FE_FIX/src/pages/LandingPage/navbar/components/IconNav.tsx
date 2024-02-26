import { HStack, Stack, Text } from "@chakra-ui/react";
import { FaHeart, FaHome, FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

export default function IconNav() {
  return (
    <Stack spacing={6} px={5} py={5}>
      <Link to="/">
        <HStack color={"white"} fontSize={"1.3rem"} _hover={{ color: "green" }}>
          <Text>
            <FaHome />
          </Text>{" "}
          <Text
            fontSize={"0.9rem"}
            display={{ base: "none", md: "inline-block" }}
          >
            Home
          </Text>
        </HStack>
      </Link>
      <Link to="/search">
        <HStack color={"white"} fontSize={"1.3rem"} _hover={{ color: "green" }}>
          <Text>
            <FaSearch />
          </Text>{" "}
          <Text
            fontSize={"0.9rem"}
            display={{ base: "none", md: "inline-block" }}
          >
            Search
          </Text>
        </HStack>
      </Link>
      <Link to="/follow">
        <HStack color={"white"} fontSize={"1.3rem"} _hover={{ color: "green" }}>
          <Text>
            <FaHeart />
          </Text>{" "}
          <Text
            fontSize={"0.9rem"}
            display={{ base: "none", md: "inline-block" }}
          >
            Follow
          </Text>
        </HStack>
      </Link>
      <Link to="/">
        <HStack color={"white"} fontSize={"1.3rem"} _hover={{ color: "green" }}>
          <Text>
            <IoMdContact />
          </Text>{" "}
          <Text
            fontSize={"0.9rem"}
            display={{ base: "none", md: "inline-block" }}
          >
            Profile
          </Text>
        </HStack>
      </Link>
    </Stack>
  );
}
