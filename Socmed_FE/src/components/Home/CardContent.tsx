import { Avatar, Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { IThreads } from "../../mocks/threads";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CardContent: React.FC<IThreads> = (props) => {
  const [like, setLike] = useState(false);

  const {
    id,
    avatar,
    profileName,
    userName,
    content,
    image_content,
    datePost,
    likes,
    replies,
  } = props;
  return (
    <>
      <Box
        w={"100%"}
        bg={"#171923"}
        px={4}
        py={4}
        borderBottom={"1px solid #555"}
      >
        <HStack>
          <Box mb={"auto"}>
            <Avatar name="Dan Abrahmov" src={avatar} />
          </Box>
          <Box ml={2}>
            <HStack>
              <Heading color={"white"} fontSize={"1rem"}>
                {profileName}
              </Heading>
              <Text color={"gray.400"} fontSize={"0.7rem"}>
                @{userName}
              </Text>
              <Text color={"gray.400"} fontSize={"0.7rem"}>
                {datePost}h
              </Text>
            </HStack>
            <Text color={"white"} fontSize={"0.8rem"}>
              {content}
            </Text>
            <Box
              w={["8rem", "15rem", "20rem"]}
              h={["10rem", "11rem", "auto"]}
              mt={4}
              borderRadius={"20px"}
              overflow={"hidden"}
            >
              {image_content && (
                <Image boxSize="full" objectFit="cover" src={image_content} />
              )}
            </Box>
            <HStack mt={3} px={4}>
              <Box
                onClick={() => setLike(!like)}
                fontSize={"1rem"}
                color={"white"}
              >
                {like ? (
                  <Text color={"red"}>
                    {" "}
                    <FaHeart />
                  </Text>
                ) : (
                  <FaHeart />
                )}
              </Box>
              <Text color={"white"} fontSize={"0.9rem"}>
                {" "}
                {likes}
              </Text>
              <Link to={`/detailStatus/:${id}`}>
                <Box
                  fontSize={"1rem"}
                  color={"white"}
                  _hover={{ color: "blue", cursor: "pointer" }}
                >
                  {" "}
                  <MdOutlineComment />
                </Box>
              </Link>
              <Text color={"white"} fontSize={"0.9rem"}>
                {" "}
                {replies}
              </Text>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};
