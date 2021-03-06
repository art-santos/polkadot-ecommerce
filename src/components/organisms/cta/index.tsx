import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Button } from "@components/atoms/button";
import * as React from "react";

export const Cta = () => {
    return (
        <Box as="section" borderBottomWidth="1px" borderBottomColor="gray.100">
            <Box
                maxW="3xl"
                mx="auto"
                px={{ base: "6", lg: "8" }}
                py={{ base: "16", sm: "20" }}
                textAlign="center"
            >
                <Heading
                    my="4"
                    as="h2"
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight="700"
                    letterSpacing="tight"
                    lineHeight="1.2"
                >
                    Get the best products and pay with{" "}
                    <Box
                        as="mark"
                        bg="unset"
                        color="main.100"
                        whiteSpace="nowrap"
                    >
                        KSM/DOTS
                    </Box>
                </Heading>
                <Text fontSize="lg" maxW="xl" mx="auto">
                    Choose the product you want and pay with Polkadot Network
                    tokens.
                </Text>
            </Box>
        </Box>
    );
};
