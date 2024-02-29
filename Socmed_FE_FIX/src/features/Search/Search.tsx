import {
  Box,
  Button,
  //   Card,
  //   CheckboxIcon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  //   InputRightElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { useSearch } from "./hooks/useSearch";
import { useEffect, useState } from "react";

export const Search = () => {
  const { filteredUsers, searchUsers } = useSearch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    searchUsers(value);
  };

  useEffect(() => {
    if (!searchQuery) return setSearchQuery("");
  }, [searchQuery]);

  return (
    <>
      <Box h="100%" bg={"#171923"} color={"white"}>
        <Stack spacing={3} px={5}>
          <InputGroup mt={5}>
            <InputLeftElement
              pointerEvents="none"
              children={<FaUser color="white" />}
            />
            <Input
              focusBorderColor="white"
              placeholder="look for people around you"
              borderRadius="20px"
              // value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </InputGroup>
          <Stack
            h={"80vh"}
            overflowY={"auto"}
            sx={{
              "&::-webkit-scrollbar": { width: "5px", borderRadius: "full" },
            }}
          >
            {filteredUsers.map((user) => (
              <Box key={user.id} display="flex" gap={2} position="relative">
                <Image
                  borderRadius="100%"
                  objectFit="cover"
                  h={10}
                  w={10}
                  marginLeft={4}
                  marginTop={4}
                  maxW={{ base: "100%", sm: "200px" }}
                  src={
                    user.profile_picture ? user.profile_picture : "/profile.png"
                  }
                  alt="picture"
                />
                <Box marginTop={2} ml={2}>
                  <Text textTransform={"capitalize"}>{user.full_name}</Text>
                  <Text>@{user.user_name}</Text>
                </Box>
                <Spacer />{" "}
                <Box>
                  <Button
                    border={"1px"}
                    backgroundColor={"mainBg.200"}
                    colorScheme="green"
                  >
                    Follow
                  </Button>
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>

      {/* <Box bg={"#171923"} height={"full"}>
        <Stack spacing={4}>
          <InputGroup w={"80%"} mx={"auto"} mt={5}>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
            >
              <FaSearch />
            </InputLeftElement>
            <Input placeholder="Search..." />
            <InputRightElement>
              <CheckboxIcon color="green.500" />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Box> */}
    </>
  );
};
