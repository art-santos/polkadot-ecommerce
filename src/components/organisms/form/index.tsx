import {
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaMailBulk } from "react-icons/fa";
import { Button } from "@components/atoms/button";
import React from "react";

export default function CheckoutForm({
    email,
    setEmail,
    setEmailSuccess,
}): JSX.Element {
    const [error, setError] = React.useState(false);

    const handleValidEmail = () => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            setEmailSuccess(true);
        } else {
            setError(true);
        }
    };

    return (
        <Stack
            spacing={4}
            w="full"
            maxW={"full"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            borderWidth="1px"
            borderColor="gray.100"
            p={6}
            my={12}
        >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                Enter your details
            </Heading>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                {error && (
                    <FormLabel color="main.100">
                        Please enter a valid mail
                    </FormLabel>
                )}
                <Input
                    placeholder="email@mail.com"
                    _placeholder={{ color: "black.100" }}
                    type="email"
                    transition="all 0.05s"
                    border="1px solid green"
                    height="3rem"
                    _focus={{
                        borderColor: "main.100",
                        borderWidth: "3px",
                        boxShadow: "sm",
                        transition: "all 0.05s",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <Stack spacing={6}>
                <Button
                    bg={"black.100"}
                    color={"white"}
                    w={"full"}
                    height="3rem"
                    _hover={{
                        bg: "main.200",
                    }}
                    onClick={handleValidEmail}
                    leftIcon={<FaMailBulk />}
                >
                    Submit Mail
                </Button>
            </Stack>
        </Stack>
    );
}
