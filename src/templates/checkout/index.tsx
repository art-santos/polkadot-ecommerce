import { Header } from "@components";
import { Checkout } from "@components/organisms/checkout";
import React from "react";

export const TemplateCheckout: React.FC = () => {
    return (
        <>
            <Header />
            <Checkout />
        </>
    );
};
