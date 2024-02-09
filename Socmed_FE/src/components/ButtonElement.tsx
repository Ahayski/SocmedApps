import { Button } from "@chakra-ui/react"
import React from "react"

interface ButtonProps {
    children: React.ReactNode
}

export const ButtonElement = ({ children }: ButtonProps) => {
    return (
        <>
            <Button
                bg={"green.600"}
                color={"white"}
                _hover={{ bg: "white", color: "black" }}
                borderRadius={"15px"}
            >
                {children}
            </Button>
        </>
    )
}
