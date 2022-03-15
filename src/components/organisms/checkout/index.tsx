import { Flex, Stack, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import CheckoutForm from "../form";
import { CartOrder } from "./CartOrderSummary";

export const Checkout = (): JSX.Element => {
    const [email, setEmail] = React.useState("");
    const [emailSuccess, setEmailSuccess] = React.useState(false);
    const [payment, setPayment] = React.useState("");
    const [paymentSuccess, setPaymentSuccess] = React.useState(false);

    return (
        <Flex
            maxW={{ base: "3xl", lg: "full" }}
            mx="auto"
            h="80vh"
            px={{ base: "4", md: "8", lg: "0" }}
            py={{ base: "6", md: "8", lg: "12" }}
            align="center"
            justify="center"
        >
            <Stack
                direction={{ base: "column", lg: "column" }}
                align={{ lg: "center" }}
            >
                <Flex
                    direction="column"
                    align="center"
                    flex="1"
                    w={["full", "3xl"]}
                >
                    {!emailSuccess ? (
                        <CheckoutForm
                            email={email}
                            setEmail={setEmail}
                            setEmailSuccess={setEmailSuccess}
                        />
                    ) : (
                        <CartOrder />
                    )}
                </Flex>
            </Stack>
        </Flex>
    );
};
