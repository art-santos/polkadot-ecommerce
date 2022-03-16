import { Flex, Spinner } from "@chakra-ui/react";
import * as React from "react";

//-----------------------------------------------------------
//Loading Component
export const Loading = () => {
    return (
        <Flex justify="center" align="center">
            <Spinner color="main.100" thickness="5px" size="xl" />
        </Flex>
    );
};
