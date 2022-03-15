import { Text } from "@chakra-ui/react";

interface ICurrencyPriceProps {
    exchange: number;
    price: number;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
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
