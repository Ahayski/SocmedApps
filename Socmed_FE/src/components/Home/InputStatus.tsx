import {
  Box,
  Button,
  FormControl,
  HStack,
  Image,
  Input,
} from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";

function InputStatus() {
  return (
    <Box w={"100%"} mt={3} px={6} borderBottom={"1px solid #555"} pb={6}>
      <HStack>
        <Image
          borderRadius="full"
          boxSize="3rem"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />

        <FormControl w={"100%"} display={"flex"} gap={3}>
          <Input
            type="text"
            color={"white"}
            placeholder="What's is Happening ?"
            border={"none"}
          />
          <Box color={"green"} _hover={{ color: "white", cursor: "pointer" }}>
            {" "}
            <BiSolidImageAdd size={40} />
          </Box>
          <Button colorScheme={"green"} w={20} borderRadius={"20px"} h={"2rem"}>
            Post
          </Button>
        </FormControl>
      </HStack>
    </Box>
  );
}

export default InputStatus;
