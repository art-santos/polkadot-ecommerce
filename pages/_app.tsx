import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from "recoil";
import { Header, Footer } from "@components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,700&display=swap"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <ChakraProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <RecoilRoot>
                            <Header />
                            <Component {...pageProps} />
                            <Footer />
                        </RecoilRoot>
                    </Hydrate>
                </QueryClientProvider>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
