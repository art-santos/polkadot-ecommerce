import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Logo } from "@components/atoms/logo";
import React from "react";

export default function Success(): JSX.Element {

    return (
        <Flex
            direction="column"
            justify="center"
            textAlign="center"
            h="100vh"
            py={10}
            px={6}
        >
            <Logo />
            <Heading as="h2" color="main.100" mt={6} mb={2}>
                Thanks for Buying!
            </Heading>
            <Text color={"black.100"}>
                Your order has been placed and will be shipped to you shortly.
            </Text>
        </Flex>
    );
}
