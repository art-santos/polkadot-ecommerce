import { Box, Flex } from "@chakra-ui/react";
import { CurrencyBadge } from "./CurrencyBadge";
import { CurrencyIcon } from "./CurrencyIcon";
import { CurrencyPrice } from "./CurrencyPrice";

interface IPriceTagProps {
    price: number;
    exchange: number;
    currency: string;
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

export const PriceTag = ({
    price,
    currency,
    exchange,
    size,
}: IPriceTagProps): JSX.Element => {
    return (
        <Flex
            fontSize="xl"
            color="black.100"
            justify="space-around"
            alignItems="center"
            m="auto"
            width="115px"
        >
            <Box as="span" color="gray.200" fontSize="md">
                <CurrencyIcon currency={currency} />
            </Box>
            <CurrencyPrice
                currency={currency}
                size={size}
                exchange={exchange}
                price={price}
            />
            <CurrencyBadge currency={currency} />
        </Flex>
    );
};
