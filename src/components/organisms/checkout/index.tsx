import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import CheckoutForm from "../form";
import { CartOrder } from "./CartOrderSummary";

export const Checkout = () => (
    <Box
        maxW={{ base: "3xl", lg: "full" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
    >
        <Stack
            direction={{ base: "column", lg: "column" }}
            align={{ lg: "center" }}
        >
            <Flex flex="1" w={["full", "3xl"]}>
                <CheckoutForm />
            </Flex>

            <Flex
                direction="column"
                align="center"
                flex="1"
                w={["full", "3xl"]}
            >
                <CartOrder />
            </Flex>
        </Stack>
    </Box>
);
