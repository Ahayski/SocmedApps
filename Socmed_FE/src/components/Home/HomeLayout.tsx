import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import InputStatus from "./InputStatus";
import React from "react";
import ModalChat from "./ModalChat";
import { BiSolidImageAdd } from "react-icons/bi";
import CardContent from "./CardContent";

function HomeLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Box w={"100%"} h={"100%"} bg={"#171923"}>
      <Heading color={"white"} fontSize={"1.7rem"} px={6} pt={6}>
        Home
      </Heading>
      <Box onClick={onOpen}>
        <InputStatus />
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"md"}
      >
        <ModalOverlay />
        <ModalContent bg={"#171923"} color={"white"}>
          <ModalCloseButton />
          <ModalBody pb={6} borderBottom={"1px solid #555"}>
            <ModalChat />
          </ModalBody>

          <ModalFooter gap={4}>
            <Box color={"green"} _hover={{ color: "white", cursor: "pointer" }}>
              {" "}
              <BiSolidImageAdd size={40} />
            </Box>
            <Button
              colorScheme={"green"}
              w={"5rem"}
              borderRadius={"15px"}
              h={"2rem"}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box>
        <CardContent />
      </Box>
    </Box>
  );
}

export default HomeLayout;
