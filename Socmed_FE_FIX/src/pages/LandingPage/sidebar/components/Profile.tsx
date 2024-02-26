import {
    Box,
    Button,
    Flex,
    HStack,
    Image,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
import {  useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/types/rootState";
import { AUTH_CHECK } from "../../../../store/rootReducer";
import { useEffect } from "react";
  function Profile() {
    const auth = useSelector((state: RootState) => state.auth)
    console.log("ini auth", auth)
    const dispatch = useDispatch()

    useEffect(() => {
      const storeAuthData = localStorage.getItem("auth");
      if (storeAuthData) {
        const parsedAuthData = JSON.parse(storeAuthData);
        dispatch(AUTH_CHECK( parsedAuthData ));
      }
    }, [dispatch]);


    const boxBg = useColorModeValue("#1a202c ", "#1a202c");
    const mainText = useColorModeValue("white", "white");
    const secondaryText = useColorModeValue("gray.400", "gray.400");
    return (
      <Flex
        borderRadius="20px"
        bg={boxBg}
        p="20px"
        h="345px"
        w={{ base: "0px", md: "100%" }}
        direction="column"
      >
        <Image
          src="https://i.ibb.co/xmP2pS6/Profile.png"
          maxW="100%"
          borderRadius="20px"
        />
        <Flex flexDirection="column" mb="10px">
          <Image
            src={auth.profile_picture? auth.profile_picture : "https://i.ibb.co/B3gYTYs/Profile-Image.png"}
            border="5px solid red"
            mx="auto"
            borderColor={boxBg}
            width="68px"
            height="68px"
            mt="-38px"
            borderRadius="50%"
            ml={"20px"}
          />
          <Box ml={"auto"} mt={"-20px"}>
            <Button
              h={"30px"}
              w={"100%"}
              bg={"none"}
              border={"1px solid #555"}
              color={"white"}
            >
              Edit Profile
            </Button>  
          </Box>
          <Text
            fontWeight="600"
            color={mainText}
            textAlign="left"
            fontSize="1.3rem"
            mt={3}
          >
            {auth.full_name}
          </Text>
          <Text
            color={secondaryText}
            textAlign="left"
            fontSize="sm"
            fontWeight="500"
          >
            @Ahayski
          </Text>
        </Flex>
        <Text fontSize={"0.8rem"} color={"white"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta
          ducimus eligendi delectus!
        </Text>
        <HStack mt={4}>
          <Text fontSize={"0.8rem"} color={"gray.400"}>
            {" "}
            221
          </Text>
          <Text fontSize={"0.8rem"} color={"white"}>
            {" "}
            Following
          </Text>
          <Text ml={4} fontSize={"0.8rem"} color={"gray.400"}>
            {" "}
            226
          </Text>
          <Text fontSize={"0.8rem"} color={"white"}>
            {" "}
            Follower
          </Text>
        </HStack>
      </Flex>
    );
  }
  
  export default Profile;
  