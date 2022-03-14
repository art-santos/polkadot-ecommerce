import { TemplateSuccess } from "src/templates";
import { useRouter } from "next/router";
import React from "react";

export default function Success(): JSX.Element {
    const router = useRouter();

    React.useEffect(() => {
        setTimeout(() => {
            router.push("/", "/", { shallow: true });
        }, 5000);
    }, []);

    return <TemplateSuccess />;
}
