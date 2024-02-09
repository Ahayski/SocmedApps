import { Avatar, Box, HStack, Heading, Image, Text } from "@chakra-ui/react";

function CardContent() {
  return (
    <Box w={"100%"} height={"auto"} bg={"#171923"} px={4} py={4}>
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
        </Box>
      </HStack>
    </Box>
  );
}

export default CardContent;
