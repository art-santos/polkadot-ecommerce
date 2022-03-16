import { Flex } from "@chakra-ui/react";
import { Header } from "@components/";
import ProductDetails from "@components/organisms/product-details";

export const TemplateProduct = ({ id }): JSX.Element => {
    console.log(id);
    return (
        <>
            <Header />
            <Flex direction="column" minH="100vh">
                <ProductDetails id={id} />
            </Flex>
        </>
    );
};
