import { Avatar, Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
// import { IThreads } from "../../../mocks/thread";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { IThreadCard } from "../../../interface/thread";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function CardContent(props: IThreadCard) {
  const [like, setLike] = useState(false);

  // const {
  //   id,
  //   avatar,
  //   profileName,
  //   userName,
  //   content,
  //   image_content,
  //   datePost,
  //   likes,
  //   replies,
  // } = props;
  return (
    <>
      <Box
        key={props.id}
        w={"100%"}
        bg={"#171923"}
        px={4}
        py={4}
        borderBottom={"1px solid #555"}
      >
        <HStack>
          <Box mb={"auto"}>
            <Avatar
              name="Dan Abrahmov"
              src={props.user?.profile_picture ?? "/profile.jpg"}
            />
          </Box>
          <Box ml={2}>
            <HStack>
              <Heading
                color={"white"}
                fontSize={["0.7rem", "0.8rem", "0.9rem"]}
                textTransform={"capitalize"}
              >
                {props.user?.full_name}
              </Heading>
              <Text color={"gray.400"} fontSize={"0.7rem"}>
                @{props.user?.user_name}
              </Text>
              <Text color={"gray.400"} fontSize={"0.7rem"}>
                {props.created_at &&
                  formatDistanceToNow(parseISO(props.created_at), {
                    addSuffix: true,
                    includeSeconds: true,
                  })}
              </Text>
            </HStack>
            <Text color={"white"} fontSize={"0.8rem"}>
              {props.content}
            </Text>
            <Box
              w={["8rem", "15rem", "20rem"]}
              h={["10rem", "11rem", "auto"]}
              mt={4}
              borderRadius={"20px"}
              overflow={"hidden"}
            >
              {props.image_thread && (
                <Image
                  boxSize="full"
                  objectFit="cover"
                  src={props.image_thread}
                />
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
                {/* {likes} */}
              </Text>
              {/* <Link to={`/detailStatus/:${id}`}> */}
              <Box
                fontSize={"1rem"}
                color={"white"}
                _hover={{ color: "blue", cursor: "pointer" }}
              >
                {" "}
                <MdOutlineComment />
              </Box>
              {/* </Link> */}
              <Text color={"white"} fontSize={"0.9rem"}>
                {" "}
                {/* {replies} */}
              </Text>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
