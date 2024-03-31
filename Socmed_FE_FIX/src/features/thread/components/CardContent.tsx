import {
  Avatar,
  Box,
  // Button,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { SlOptions } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
// import { IThreads } from "../../../mocks/thread";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IThreadCard } from "../../../interface/thread";
import { formatDistanceToNow, parseISO } from "date-fns";
// import { useNavigate } from "react-router-dom";
// import { useThreadCard } from "../hooks/useThreadCard";
// import { BiSolidLike } from "react-icons/bi";

export default function CardContent(props: IThreadCard) {
  // const navigate = useNavigate();
  // const { handlePostLike } = useThreadCard();

  const [liked, setLiked] = useState<boolean>(() => {
    // Membaca status like dari local storage saat komponen dimuat
    const likedFromStorage = localStorage.getItem(`thread_${props.id}_liked`);
    return likedFromStorage
      ? JSON.parse(likedFromStorage)
      : props.is_liked || false;
  });

  // const [likeCount, setLikeCount] = useState<number>(props.count_like ?? 1);

  useEffect(() => {
    // Menyimpan status like ke dalam local storage setelah perubahan
    localStorage.setItem(`thread_${props.id}_liked`, JSON.stringify(liked));
  }, [props.id, liked]);

  // const handleLikeClick = () => {
  //   if (props.id) {
  //     handlePostLike(props.id, !liked);
  //     setLiked(!liked);
  //     setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  //   }
  // };

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
          <Box ml={2} w={"100%"}>
            <HStack wrap={"wrap"}>
              <Heading
                color={"white"}
                fontSize={["0.7rem", "0.8rem", "0.9rem"]}
                textTransform={"capitalize"}
              >
                {props.user?.full_name}
              </Heading>

              <Text
                color={"gray.400"}
                fontSize={{ base: "0.6rem", md: "0.7rem" }}
              >
                @{props.user?.user_name}
              </Text>

              <Text
                color={"gray.400"}
                fontSize={{ base: "0.6rem", md: "0.7rem" }}
              >
                {props.created_at &&
                  formatDistanceToNow(parseISO(props.created_at), {
                    addSuffix: true,
                    includeSeconds: true,
                  })}
              </Text>

              <Box h={"15px"} ml={"auto"} px={2} textAlign={"center"}>
                <Menu isLazy>
                  <MenuButton color={"white"}>
                    <SlOptions />
                  </MenuButton>
                  <MenuList textAlign={"left"}>
                    <MenuItem
                    // onClick={() => hendelDelete(data.id, data.author.id)}
                    >
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </HStack>
            <Text color={"white"} fontSize={"0.8rem"}>
              {props.content}
            </Text>

            {props.image_thread && (
              <Box
                w={["10rem", "15rem", "25rem"]}
                my={3}
                height={["10rem", "11rem", "auto"]}
                bg={"red"}
                borderRadius={"20px"}
                overflow={"hidden"}
              >
                <Image
                  boxSize="full"
                  objectFit="cover"
                  src={props.image_thread}
                  alt="image"
                />
              </Box>
            )}
            <HStack mt={3} px={4}>
              <Box
                onClick={() => setLiked(!liked)}
                fontSize={"1rem"}
                color={"white"}
              >
                {liked ? (
                  <Text color={"red"}>
                    {" "}
                    <FaHeart />
                  </Text>
                ) : (
                  <FaHeart />
                )}
              </Box>

              {/* <Text color={"white"} fontSize={"0.9rem"}>
                {" "}
                {likes}
              </Text>

              {/* <Button
                onClick={handleLikeClick}
                borderRadius={20}
                w={"50px"}
                variant="ghost"
              >
                {liked?.map((liked) => liked.user.id).includes(user.id) ? (
                  <BiSolidLike />
                ) : (
                  <BiLike />
                )}
                <Text>
                  &nbsp; &nbsp;
                  {likeCount}
                  &nbsp; Likes
                </Text>
              </Button> */}

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
