import { Box, Button, Card, CardBody, CardHeader, Flex, FormControl, Heading,  Input, Text } from "@chakra-ui/react"
// import { useState } from "react"


export const FormRegister = () => {
    // const [form, setForm] = useState({
    //     fullname
    // })
  return (
    <Box w={"md"} mx={"auto"} mt={"1rem"}>
      <Card size={'md'} variant={"outline"} p={2} boxShadow={"lg"} rounded={"lg"}>
        <Flex justifyContent={"space-between"}>
          <Heading size={"2xl"} color={"green.400"} p={4}>
            Circle
          </Heading>
          {/* <Button
            // onClick={toggleColorMode}
            bg={"transparent"}
            p={2}
            rounded={"full"}
          >
            <Icon 
            // as={colorMode === "dark" ? BiMoon : BiSun} 
            />
          </Button> */}
        </Flex>
        <CardHeader textAlign={"center"}>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Register your account
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            Enter your details below
          </Text>
        </CardHeader>
        <CardBody>
          <FormControl isRequired>
            <Input
            placeholder="Fullname*"
            name="fullname"
            id="fullname"
            // onChange={handleChange}
            mb={2}
            />
            <Input
            placeholder="Username*"
            name="username"
            id="username"
            // onChange={handleChange}
            mb={2}
            />
            <Input
            placeholder="Email*"
            name="email"
            id="email"
            // onChange={handleChange}
            mb={2}
            />
            <Input
            placeholder="Password*"
            name="password"
            id="password"
            // onChange={handleChange}
            type={"password"} 
            />
          <Button
          w={"full"} 
          mt={4} 
          colorScheme={"green"}
        //   onClick={handleRegister}
          >
            Register
          </Button>
          </FormControl>
        </CardBody>
      </Card>
      <Text
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
        mt={2}
        // onClick={handleNavigate}
        fontSize={"sm"}
        color={"gray.500"}
        textAlign={"end"}
      >
        Already have an account? Login
      </Text>
    </Box>
  )
}
