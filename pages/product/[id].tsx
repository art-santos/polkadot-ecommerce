import { DefaultHead } from "@components/atoms/Head";
import { TemplateProduct } from "src/templates";

const Product: React.FC = () => {
    return (
        <>
            <DefaultHead title="Product" />
            <TemplateProduct />
        </>
    );
};

export default Product;
