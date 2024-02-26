import { Box, FormControl, HStack, Image, Input } from "@chakra-ui/react"


function ModalChat() {
    return (
        <Box w={"100%"} mt={3} px={6}>
            <HStack>
                <Image
                    borderRadius='full'
                    boxSize='3rem'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />


                <FormControl w={"100%"} display={"flex"} gap={3}>
                    <Input type='text' color={"white"} placeholder="What's is Happening ?" border={"none"} />
                </FormControl>
            </HStack>

          

        </Box>
    )
}

export default ModalChat