import { DefaultHead } from "@components/atoms/Head";
import React from "react";
import { TemplateHome } from "src/templates";

const Home: React.FC = (): JSX.Element => {
    return (
        <>
            <DefaultHead title="Home" />
            <TemplateHome />
        </>
    );
};

export default Home;
