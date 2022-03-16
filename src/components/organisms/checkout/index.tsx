import { Flex, Stack } from "@chakra-ui/react";
import * as React from "react";
import CheckoutForm from "../form";
import PriceContext from "src/context/contexts/priceContext";

//dynamic importing for window definition polkadot.js [BREAKING CHANGE]
import dynamic from "next/dynamic";
import { TransactionMessage } from "./Alert";
const CartOrder = dynamic(() => import("./CartOrder"), { ssr: false });
//---------------------------------------------------------------------
export const Checkout = (): JSX.Element => {
    const [email, setEmail] = React.useState("");
    const [emailSuccess, setEmailSuccess] = React.useState(false);
    const [transactionHash, setTransactionHash] = React.useState("");
    const [paymentError, setPaymentError] = React.useState(false);

    return (
        <Flex
            maxW={{ base: "3xl", lg: "full" }}
            mx="auto"
            px={{ base: "4", md: "8", lg: "0" }}
            py={{ base: "6", md: "8", lg: "12" }}
            align="center"
            justify="center"
            minHeight={["0px", "800px"]}
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
                        <CartOrder
                            setTransactionHash={setTransactionHash}
                            setPaymentError={setPaymentError}
                        />
                    )}
                </Flex>
            </Stack>
            <TransactionMessage
                transactionHash={transactionHash}
                paymentError={paymentError}
            />
        </Flex>
    );
};
