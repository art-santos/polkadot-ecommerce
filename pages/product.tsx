import { DefaultHead } from "@components/atoms/Head";
import { TemplateProduct } from "src/templates";

const Product: React.FC = ({ id }) => {
    return (
        <>
            <DefaultHead title="Product" />
            <TemplateProduct id={id}/>
        </>
    );
};

export default Product;

export const getServerSideProps = (context: { query: { id: string } }) => {
    const { id } = context.query;
    return {
        props: {
            id: id,
        },
    };
};
