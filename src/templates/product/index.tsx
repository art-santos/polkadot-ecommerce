import { Flex } from "@chakra-ui/react";
import ProductDetails from "@components/organisms/product-details";

export const TemplateProduct = (): JSX.Element => {
    return (
        <Flex direction="column" minH="100vh">
            <ProductDetails />
        </Flex>
    );
};
