import { Flex, Spacer } from "@chakra-ui/react";
import { Cta, Products } from "@components";

export const TemplateHome: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Cta />
            <Products />
            <Spacer />
        </Flex>
    );
};
