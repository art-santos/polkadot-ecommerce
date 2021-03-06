import React from "react";

import {
    chakra,
    Flex,
    HStack,
    useDisclosure,
    InputGroup,
    InputLeftElement,
    Input,
    Stack,
    Spacer,
} from "@chakra-ui/react";
import { Logo } from "@components";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";
import FilterContext from "src/context/contexts/filterContext";

export const Header = () => {
    const router = useRouter();
    const { filter, setFilter } = React.useContext(FilterContext);
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                bg="header.100"
                w="100%"
                px={{ base: 2, sm: 4 }}
                py={4}
                borderBottomColor="gray.100"
                borderBottomWidth="1px"
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
                    {router.route === "/" ? (
                        <Stack
                            spacing={[0, 3]}
                            display={mobileNav.isOpen ? "none" : "flex"}
                            alignItems="center"
                            w={["100%", "60%"]}
                            pb={["16px", "0px"]}
                        >
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <AiOutlineSearch
                                        size={30}
                                        style={{
                                            color: "#e6007a",
                                            paddingTop: "8px",
                                        }}
                                    />
                                </InputLeftElement>
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    transition="all 0.05s"
                                    border="1px solid green"
                                    height="3rem"
                                    _focus={{
                                        borderColor: "main.100",
                                        borderWidth: "3px",
                                        boxShadow: "sm",
                                        transition: "all 0.05s",
                                    }}
                                    onChange={(e) => setFilter(e.target.value)}
                                    value={filter}
                                />
                            </InputGroup>
                        </Stack>
                    ) : (
                        <Spacer />
                    )}
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
};
