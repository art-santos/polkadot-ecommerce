import { TemplateSuccess } from "src/templates";
import { useRouter } from "next/router";
import React from "react";
import { DefaultHead } from "@components/atoms/Head";

export const Success: React.FC = (): JSX.Element => {
    const router = useRouter();

    React.useEffect(() => {
        setTimeout(() => {
            router.push("/", "/", { shallow: true });
        }, 5000);
    }, []);

    return (
        <>
            <DefaultHead title="Success" />
            <TemplateSuccess />
        </>
    );
};

export default Success;
