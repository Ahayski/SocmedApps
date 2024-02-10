import { Avatar, Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
function Suggestion() {
  return (
    <>
      <Box
        w={"100%"}
        height={"18rem"}
        bg={"#1a202c"}
        px={6}
        py={6}
        mt={4}
        mb={5}
        borderRadius={"20px"}
      >
        <Heading fontSize={"1rem"} color={"white"}>
          Suggested for you
        </Heading>
        <Box mt={5} display={"flex"} flexDirection={"column"} gap={5}>
          <HStack>
            <Box>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Box>
            <Box>
              <Heading fontSize={"1rem"} color={"white"}>
                {" "}
                Alfansyuri
              </Heading>
              <Text color={"gray.400"}>@Alfan</Text>
            </Box>
            <Button
              ml={"auto"}
              h={"30px"}
              bg={"none"}
              border={"1px solid #555"}
              color={"white"}
              borderRadius={"20px"}
            >
              Follow
            </Button>
          </HStack>
          <HStack>
            <Box>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Box>
            <Box>
              <Heading fontSize={"1rem"} color={"white"}>
                {" "}
                Alfansyuri
              </Heading>
              <Text color={"gray.400"}>@Alfan</Text>
            </Box>
            <Button
              ml={"auto"}
              h={"30px"}
              bg={"none"}
              border={"1px solid #555"}
              color={"white"}
              borderRadius={"20px"}
            >
              Follow
            </Button>
          </HStack>
          <HStack>
            <Box>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Box>
            <Box>
              <Heading fontSize={"1rem"} color={"white"}>
                {" "}
                Alfansyuri
              </Heading>
              <Text color={"gray.400"}>@Alfan</Text>
            </Box>
            <Button
              ml={"auto"}
              h={"30px"}
              bg={"none"}
              border={"1px solid #555"}
              color={"white"}
              borderRadius={"20px"}
            >
              Follow
            </Button>
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default Suggestion;
