import { Text } from "@chakra-ui/react";
import PriceContext from "src/context/contexts/priceContext";
import React from "react";

interface ICurrencyPriceProps {
    exchange: number;
    currency: string;
    price: number;
    size?:
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "1xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
}

export const CurrencyPrice = ({
    exchange,
    price,
    size,
}: ICurrencyPriceProps): JSX.Element => {
    const rate = (price / exchange).toFixed(2);

    return (
        <Text as="span" fontSize={size ? size : "xl"}>
            {rate}
        </Text>
    );
};
