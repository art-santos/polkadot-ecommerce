import { Flex, Spinner, Text } from "@chakra-ui/react";
import { PriceTag } from "@components/atoms/price-tag";
import { useCurrencyPrice } from "src/context/hooks";
import * as React from "react";

type OrderItemProps = {
    price: number;
    label: string;
    currency: string;
    children?: React.ReactNode;
};
export const OrderItem = (props: OrderItemProps): JSX.Element => {
    const { polkadot, kusama, loading, error } = useCurrencyPrice();

    const { price, label, currency, children } = props;

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <Flex justify="space-between" fontSize="sm">
            <Text fontWeight="medium" color="black.100">
                {label}
            </Text>
            {currency && polkadot && kusama ? (
                <Text fontWeight="medium" color="black.100">
                    <PriceTag
                        price={price}
                        exchange={
                            currency === "Polkadot"
                                ? polkadot.polkadot.usd
                                : kusama.kusama.usd
                        }
                        currency={currency}
                        size="1xl"
                    />
                </Text>
            ) : (
                <Spinner color="main.100" thickness="3px" size="lg" />
            )}
        </Flex>
    );
};
