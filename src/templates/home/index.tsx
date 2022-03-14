import { Flex, Spacer } from "@chakra-ui/react";
import { Cards } from "@components/molecules/cards";
import { Footer } from "@components/organisms/footer";
import { Header } from "@components/organisms/header";

export const TemplateHome: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Header />
            <Spacer />
            <Footer />
        </Flex>
    );
};
