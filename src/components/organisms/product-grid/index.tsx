import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useCurrencyPrice, useProducts } from "src/context/hooks";
import * as React from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import FilterContext from "src/context/contexts/filterContext";
export const Products = (): JSX.Element => {
    const { polkadot, kusama, loading, error } = useCurrencyPrice();
    const { filter } = React.useContext(FilterContext);
    const {
        products,
        loading: loadingProducts,
        error: errorProducts,
    } = useProducts();

    if (loading) {
        return <Loading />;
    }
    if (loadingProducts) {
        return <Loading />;
    }
    if (error) {
        return <Box>Error: {error}</Box>;
    }
    if (errorProducts) {
        return <Box>Error: {error}</Box>;
    }
    if (products) {
        return (
            <Box
                maxW="9xl"
                mx="auto"
                px={{ base: "4", md: "8", lg: "30" }}
                py={{ base: "6", md: "8", lg: "30" }}
            >
                {!loading ? (
                    <ProductGrid>
                        {polkadot &&
                            kusama &&
                            products &&
                            products
                                .filter((product) =>
                                    filter
                                        ? product.title
                                              .toLowerCase()
                                              .includes(filter.toLowerCase())
                                        : true,
                                )
                                .map(
                                    (product: {
                                        id: React.Key | null | undefined;
                                    }) => (
                                        <ProductCard
                                            key={product.id}
                                            price={{
                                                dot: polkadot.polkadot.usd,
                                                ksm: kusama.kusama.usd,
                                            }}
                                            product={product}
                                        />
                                    ),
                                )}
                    </ProductGrid>
                ) : (
                    <Loading />
                )}
            </Box>
        );
    }
    return <Loading />;
};

const Loading = () => {
    return (
        <Flex justify="center" pt="25px" align="center" h="100%" m="auto">
            <Spinner size="xl" color="main.100" thickness="5px" />
        </Flex>
    );
};
