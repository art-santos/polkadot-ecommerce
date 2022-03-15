import { Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import { Button } from "@components/atoms/button";
import { PriceTag } from "@components/atoms/price-tag";
import * as React from "react";
import { FaDollarSign } from "react-icons/fa";
import { OrderItem } from "./OrderItem";
import { useCurrencyPrice, useProductInfo } from "@recoil/hooks";
import Cookies from "universal-cookie";

export const CartOrder = (): JSX.Element => {
    const cookie = new Cookies();
    const { product, loading, error } = useProductInfo(cookie.get("item"));
    const { loading: loadingCurrency } = useCurrencyPrice();

    if (loading) {
        return <Heading>Loading...</Heading>;
    }

    if (error) {
        return <Heading>Error!</Heading>;
    }

    return (
        <Stack
            spacing="8"
            borderWidth="1px"
            borderColor="gray.100"
            rounded="lg"
            padding="8"
            width="full"
        >
            <Heading size="md">Order</Heading>
            {product ? (
                <>
                    <Stack spacing="6">
                        <OrderItem
                            label="Total DOT"
                            price={product.price}
                            currency={"Polkadot"}
                        />
                        <OrderItem
                            label="Total KSM"
                            price={product.price}
                            currency={"Kusama"}
                        />

                        <Flex justify="space-between">
                            <Text fontSize="lg" fontWeight="semibold">
                                Total
                            </Text>
                            <Text fontSize="xl" fontWeight="extrabold">
                                <PriceTag
                                    exchange={1}
                                    size="2xl"
                                    price={product.price}
                                    currency="Dolar"
                                />
                            </Text>
                        </Flex>
                    </Stack>
                    {!loadingCurrency ? (
                        <Button
                            bg="main.100"
                            color="white"
                            w="full"
                            size="lg"
                            fontSize="md"
                            leftIcon={<FaDollarSign />}
                        >
                            Buy Now
                        </Button>
                    ) : (
                        <>
                            <Flex justify="center" align="center">
                                <Spinner
                                    color="main.100"
                                    thickness="4px"
                                    size="lg"
                                />
                            </Flex>
                        </>
                    )}
                </>
            ) : (
                <Flex justify="center" align="center">
                    <Spinner color="main.100" thickness="5px" size="xl" />
                </Flex>
            )}
        </Stack>
    );
};
