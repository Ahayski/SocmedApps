import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Icon,
  Image,
  Input,
} from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/types/rootState";
import { useThreads } from "../hooks/useThreads";

function InputStatus() {
  const auth = useSelector((state: RootState) => state.auth);
  const { handleChange, handlePost, fileInputRef, handleButtonClick, form } =
    useThreads();
  return (
    <Box w={"100%"} mt={6} px={6} borderBottom={"1px solid #555"} pb={3}>
      <HStack>
        <Image
          borderRadius="full"
          boxSize="3rem"
          src={auth.profile_picture ? auth.profile_picture : "/profile.png"}
          alt="Dan Abramov"
        />
        <form
          style={{ width: "100%" }}
          onSubmit={handleButtonClick}
          encType="multipart/form-data"
        >
          <FormControl w={"100%"} display={"flex"} gap={3}>
            <Input
              value={form.content}
              type="text"
              color={"white"}
              placeholder="What's is Happening ?"
              border={"none"}
              name="content"
              onChange={handleChange}
            />

            <Center>
              <label style={{ cursor: "pointer" }}>
                <Input
                  name="image_thread"
                  type="file"
                  hidden
                  onChange={handleChange}
                  ref={fileInputRef}
                />
                <Icon
                  _hover={{ color: "white", cursor: "pointer" }}
                  mr={"10px"}
                  ml={"10px"}
                  color={"green"}
                  boxSize={8}
                  as={BiSolidImageAdd}
                />
              </label>
            </Center>
            <Button
              colorScheme={"green"}
              w={20}
              borderRadius={"20px"}
              h={"2rem"}
              onClick={(e) => handlePost(e)}
            >
              Post
            </Button>
          </FormControl>
        </form>
      </HStack>
    </Box>
  );
}

export default InputStatus;
