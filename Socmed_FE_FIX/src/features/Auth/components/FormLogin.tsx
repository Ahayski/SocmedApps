import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
// import { IUser } from "../../../interface/user";

export default function Login() {
  const { handleLogin, handleChange } = useLogin();
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/register");
  }
  return (
    <Box w={"md"} mx={"auto"} py={4}>
      <Card variant={"outline"} p={4} boxShadow={"lg"} rounded={"lg"}>
        <Flex justifyContent={"space-between"}>
          <Heading size={"2xl"} color={"green.400"} p={4}>
            Circle
          </Heading>
        </Flex>
        <CardHeader textAlign={"center"}>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Sign in to your account
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            Enter your details below
          </Text>
        </CardHeader>
        <CardBody>
          <FormControl isRequired>
            <Input
              placeholder="Email"
              name="email"
              id="email"
              onChange={handleChange}
              mb={2}
              type="email"
            />
            <Input
              placeholder="Password"
              name="password"
              id="password"
              onChange={handleChange}
              mb={2}
              type="password"
            />
            <Box display="flex" justifyContent={"flex-end"}>
              <Text>Forgot password?</Text>
            </Box>
            <Button
              w={"full"}
              mt={4}
              colorScheme={"green"}
              onClick={handleLogin}
            >
              Login
            </Button>
          </FormControl>
        </CardBody>
      </Card>
      <Text
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
        mt={2}
        onClick={handleNavigate}
        fontSize={"sm"}
        color={"gray.500"}
        textAlign={"end"}
      >
        Don't have an account yet? Sign up
      </Text>
    </Box>
  );
}
