import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
    styles: {
        global: {
            h1: {
                fontWeight: 500,
                marginBottom: "0.5em",
            },
            p: {
                marginBottom: "1em",
            },
            input: {
                borderRadius: "1.5rem !important",
                border: "1px solid gray.200 !important",
            },
            button: {
                borderRadius: "1.5rem !important",
                fontFamily: "Work Sans, sans-serif",
            },
            a: {
                borderRadius: "1.5rem !important",
            },
            footer: {
                bgColor: "gray.100 !important",
            },
        },
    },
} as GlobalStyles;
