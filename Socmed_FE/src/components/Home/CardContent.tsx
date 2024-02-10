import { Avatar, Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";

function CardContent() {
  return (
    <>
      <Box w={"100%"} height={"100vh"} bg={"#171923"} px={4} py={4}>
        <HStack>
          <Box mb={"auto"}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </Box>
          <Box ml={2}>
            <HStack>
              <Heading color={"white"} fontSize={"1rem"}>
                Febryan
              </Heading>
              <Text color={"gray.400"} fontSize={"0.7rem"}>
                @Ahayski
              </Text>
              <Text color={"gray.400"} fontSize={"0.7rem"}>
                24h
              </Text>
            </HStack>
            <Text color={"white"} fontSize={"0.8rem"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              minima pariatur vel autem.
            </Text>
            <Box
              w={["8rem", "15rem", "20rem"]}
              h={["10rem", "11rem", "auto"]}
              mt={4}
              borderRadius={"20px"}
              overflow={"hidden"}
            >
              <Image
                boxSize="full"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
            <HStack mt={3} px={4}>
              <Box
                fontSize={"1rem"}
                color={"white"}
                _hover={{ color: "red", cursor: "pointer" }}
              >
                <FaHeart />
              </Box>
              <Text color={"white"} fontSize={"0.9rem"}>
                {" "}
                100
              </Text>
              <Box
                fontSize={"1rem"}
                color={"white"}
                _hover={{ color: "blue", cursor: "pointer" }}
              >
                {" "}
                <MdOutlineComment />
              </Box>
              <Text color={"white"} fontSize={"0.9rem"}>
                {" "}
                200
              </Text>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
}

export default CardContent;