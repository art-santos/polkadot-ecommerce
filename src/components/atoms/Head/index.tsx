import Head from "next/head";

interface Props {
    title?: string;
}

export const DefaultHead = ({ title }: Props): JSX.Element => {
    return (
        <Head>
            <title>Polkadot Ecom | {title}</title>
        </Head>
    );
};
