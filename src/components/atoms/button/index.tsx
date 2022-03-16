import React from "react";
import { Button as BaseButton, ButtonProps } from "@chakra-ui/react";

export type IButton = ButtonProps;

export const Button: React.FC<IButton> = ({ ...rest }) => {
    return (
        <div>
            <BaseButton
                {...rest}
                data-testid="btn"
                _hover={{
                    color: "main.100",
                    bg: "white",
                    borderColor: "main.100",
                    borderWidth: "3px",
                }}
                _active={{
                    boxShadow: "none",
                    outline: "none",
                    color: "white",
                    bg: "pink.200",
                    borderColor: "pink.200",
                    borderWidth: "3px",
                }}
                _focus={{
                    boxShadow: "none",
                    outline: "none",
                    color: "white",
                    bg: "main.100",
                    borderColor: "main.100",
                    borderWidth: "3px",
                }}
                _disabled={{
                    opacity: 0.5,
                    bg: "gray.200",
                    borderColor: "gray.200",
                    _hover: {
                        bg: "gray.200",
                        borderColor: "gray.200",
                        color: "white",
                        cursor: "not-allowed",
                    },
                }}
            />
        </div>
    );
};
