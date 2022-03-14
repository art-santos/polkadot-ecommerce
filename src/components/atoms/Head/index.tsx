import Head from "next/head";

export const DefaultHead: React.FC = () => {
    return (
        <Head>
            <title>Polkadot Ecom</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link rel="icon" href="/favicon.png" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,700&display=swap"
            />
        </Head>
    );
};
