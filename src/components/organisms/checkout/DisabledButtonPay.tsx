import { Button } from "@components/atoms/button";
import * as React from "react";
import { FaDollarSign } from "react-icons/fa";

//-----------------------------------------------------------
//Deactivated Pay Button
export const DisabledButtonPay = () => {
    return (
        <Button
            bg="main.100"
            color="white"
            w="full"
            size="lg"
            fontSize="md"
            leftIcon={<FaDollarSign />}
            disabled={true}
        >
            Pay
        </Button>
    );
};
