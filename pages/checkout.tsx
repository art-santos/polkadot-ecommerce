import { DefaultHead } from "@components/atoms/Head";
import { TemplateCheckout } from "src/templates";

const Checkout: React.FC = (): JSX.Element => {
    return (
        <>
            <DefaultHead title={"Checkout"} />
            <TemplateCheckout />
        </>
    );
};

export default Checkout;
