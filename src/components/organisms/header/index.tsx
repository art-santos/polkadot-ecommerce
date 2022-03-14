import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    InputGroup,
    InputLeftElement,
    Input,
    Avatar,
} from "@chakra-ui/react";
import { Logo } from "@components";
import {
    AiOutlineMenu,
    AiFillHome,
    AiOutlineInbox,
    AiOutlineSearch,
    AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

export const Header = () => {
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                bg="header.100"
                w="100%"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex
                    alignItems="center"
                    justifyContent={["center", "space-between"]}
                    mx="auto"
                    flexDirection={["column", "row"]}
                >
                    <HStack display="flex" spacing={[0, 3]} alignItems="center">
                        <chakra.a
                            href="/"
                            title="Polkadot Ecommerce Homepage"
                            display="flex"
                            alignItems="center"
                            pb={["16px", "0px"]}
                        >
                            <Logo />
                        </chakra.a>
                    </HStack>
                    <HStack
                        spacing={[0, 3]}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineSearch color="main.100" />
                            </InputLeftElement>
                            <Input
                                type="text"
                                placeholder="Search..."
                                _focus={{
                                    border: "3px solid #e6007a",
                                    boxShadow: "sm",
                                }}
                            />
                        </InputGroup>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
};
