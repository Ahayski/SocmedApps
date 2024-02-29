import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import IconNav from "./components/IconNav";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFeatherAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AUTH_LOGOUT } from "../../../store/rootReducer";
// import { TbLogout2 } from "react-icons/tb";

export default function SideNavbar() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const handleDelete = () => {
    localStorage.removeItem("authData");
    dispatch(AUTH_LOGOUT());
    window.location.href = "/login";
  };
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
      {token ? (
        <Box pos={"relative"} top={"12rem"} onClick={handleDelete}>
          <HStack
            color={"white"}
            fontSize={"1.3rem"}
            px={4}
            // mt={200}
            _hover={{ cursor: "pointer", color: "green" }}
          >
            <Text>
              <CiLogout />
            </Text>{" "}
            <Text
              fontSize={"0.9rem"}
              display={{ base: "none", md: "none", lg: "inline-block" }}
            >
              Logout
            </Text>
          </HStack>
        </Box>
      ) : (
        // <Box pos={"relative"} top={"12rem"} onClick={handleDelete}>
        //   <HStack color={"white"} mt={5}>
        //     <Text fontSize={"1.7rem"}>
        //       <TbLogout2 />
        //     </Text>
        //     <Text
        //       fontSize={"0.9rem"}
        //       display={{ base: "none", md: "none", lg: "inline-block" }}
        //     >
        //       Logout
        //     </Text>
        //   </HStack>
        // </Box>
        <Box>
          <Link to="/login">
            <HStack color={"white"} fontSize={"1.3rem"} px={4} mt={200}>
              <Text>
                <CiLogout />
              </Text>{" "}
              <Text
                fontSize={"0.9rem"}
                display={{ base: "none", md: "inline-block" }}
              >
                Login
              </Text>
            </HStack>
          </Link>
          <Link to="/register">
            <HStack color={"white"} fontSize={"1.3rem"} px={4} mt={4}>
              <Text>
                <CiLogout />
              </Text>{" "}
              <Text
                fontSize={"0.9rem"}
                display={{ base: "none", md: "inline-block" }}
              >
                Register
              </Text>
            </HStack>
          </Link>
        </Box>
      )}
    </Box>
  );
}
