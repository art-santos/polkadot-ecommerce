import { Flex } from "@chakra-ui/react";
import Success from "@components/organisms/success";

export const TemplateSuccess = (): JSX.Element => {
    return (
        <Flex direction="column" minH="100vh">
            <Success />
        </Flex>
    );
};
