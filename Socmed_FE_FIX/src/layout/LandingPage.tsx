import { Box, Flex } from "@chakra-ui/react"
import SideNavbar from "../pages/LandingPage/navbar/SideNavbar"
import Sidebar from "../pages/LandingPage/sidebar/Sidebar"
// import {HomeThread} from "../pages/LandingPage/thread/HomeThread"

interface LandingPageProps {
  children : React.ReactNode
}

export const LandingPage = ({children}: LandingPageProps) => {
  return (
          <Box bg={"#171923"}>
            <Flex w={"100%"} bg={"#171923"} h={"100%"} pos={"relative"}>
              <Box w={"20%"} pos={"relative"} bg={"red"}>
                <Box pos={"fixed"} zIndex={1} top={0} left={0} w={{ base: "16.7%" }}>
                  <SideNavbar /> 
                </Box>
              </Box>
              <Flex w={"100%"}>
                <Box
                  w={{ base: "100%", md: "100%", lg: "60%", xl: "65%" }}
                  bg={"yellow"}
                >
              {children} 
              {/* <HomeThread/> */}
                </Box>
                <Box
                  w={{ base: "0px", md: "0px", lg: "40%", xl: "35%" }}
                  bg={"purple"}
                  overflow={"hidden"}
                >
                  <Sidebar />
                </Box>
              </Flex>
            </Flex>
          </Box>
  )
}
