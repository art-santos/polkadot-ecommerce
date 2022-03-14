import {
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue as mode,
} from "@chakra-ui/react";
import { Button } from "@components/atoms/button";
import * as React from "react";
import { FaDollarSign } from "react-icons/fa";
import { formatPrice } from "./PriceTag";

type OrderSummaryItemProps = {
    label: string;
    value?: string;
    children?: React.ReactNode;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
    const { label, value, children } = props;
    return (
        <Flex justify="space-between" fontSize="sm">
            <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
                {label}
            </Text>
            {value ? <Text fontWeight="medium">{value}</Text> : children}
        </Flex>
    );
};

export const CartOrder = () => {
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

            <Stack spacing="6">
                <OrderSummaryItem label="Total KSM" value={formatPrice(597)} />
                <OrderSummaryItem label="Total DOTS" value={formatPrice(597)} />

                <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">
                        Total
                    </Text>
                    <Text fontSize="xl" fontWeight="extrabold">
                        {formatPrice(597)}
                    </Text>
                </Flex>
            </Stack>
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
        </Stack>
    );
};
