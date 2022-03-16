import { Flex, Spacer } from "@chakra-ui/react";
import { Cta, Header, Products } from "@components";
import React from "react";
import FilterContext from "src/context/contexts/filterContext";

export const TemplateHome: React.FC = () => {
    const [filter, setFilter] = React.useState<string>("");
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            <Header />
            <Flex direction="column" minH="100vh">
                <Cta />
                <Products />
                <Spacer />
            </Flex>
        </FilterContext.Provider>
    );
};
