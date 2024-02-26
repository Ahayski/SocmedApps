import { Box, CheckboxIcon, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"


export const Search = () => {
  return (
   <>
    <Box bg={"#171923"} height={"full"}>
        <Stack spacing={4}>
           
            <InputGroup w={"80%"}  mx={"auto"} mt={5}>
                <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                >
                <FaSearch />
                </InputLeftElement>
                <Input placeholder='Search...' />
                <InputRightElement>
                <CheckboxIcon color='green.500' />
                </InputRightElement>
            </InputGroup>
        </Stack>
    </Box>
   </>
  )
}
