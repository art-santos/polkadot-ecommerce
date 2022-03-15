import { Box } from "@chakra-ui/react";
import { useCurrencyPrice, useProducts } from "@recoil/hooks";
import * as React from "react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";

export const Products = (): JSX.Element => {
    const { polkadot, kusama, loading, error } = useCurrencyPrice();
    const {
        products,
        loading: loadingProducts,
        error: errorProducts,
    } = useProducts();

    console.log(products);
    if (loading) {
        return <Box>Loading...</Box>;
    }
    if (loadingProducts) {
        return <Box>Loading...</Box>;
    }
    if (error) {
        return <Box>Error: {error}</Box>;
    }
    if (errorProducts) {
        return <Box>Error: {error}</Box>;
    }
    return (
        <Box
            maxW="9xl"
            mx="auto"
            px={{ base: "4", md: "8", lg: "30" }}
            py={{ base: "6", md: "8", lg: "30" }}
        >
            <ProductGrid>
                {polkadot &&
                    kusama &&
                    products &&
                    products.map(
                        (product: { id: React.Key | null | undefined }) => (
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
        </Box>
    );
};
