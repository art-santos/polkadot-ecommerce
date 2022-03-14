import React, { CSSProperties } from "react";
import { Flex, Center } from "@chakra-ui/react";

import { PolkadotLogoIcon } from "@components/atoms/icons";

export const Footer: React.FC = () => {
    const iconStyle: CSSProperties = {
        fontSize: 22,
        color: "#fff",
        marginRight: "0.25rem",
        marginLeft: "0.25rem",
    };
    return (
        <Center bg="main.100" py={10}>
            <Flex flexDirection="column">
                <a
                    href="https://https://polkadot.network/"
                    target="_blank"
                    data-testid="pankod-logo"
                >
                    <PolkadotLogoIcon
                        data-test="icon"
                        color="white"
                        width="120"
                        height="40"
                    />
                </a>
            </Flex>
        </Center>
    );
};
