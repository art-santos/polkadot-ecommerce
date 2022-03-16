import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import * as React from "react";

export const ProductGrid = (props: SimpleGridProps): JSX.Element => {
    const columns = React.useMemo(() => {
        const count = React.Children.toArray(props.children).filter(
            React.isValidElement,
        ).length;
        return {
            base: Math.min(1, count),
            md: Math.min(3, count),
            lg: Math.min(4, count),
            xl: Math.min(4, count),
        };
    }, [props.children]);

    return (
        <SimpleGrid
            columns={columns}
            columnGap={{ base: "4", md: "6" }}
            rowGap={{ base: "0", md: "10" }}
            p={5}
            {...props}
        />
    );
};
