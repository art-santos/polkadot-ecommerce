import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from "recoil";
import { DefaultHead } from "@components/atoms/Head";
import { Header, Footer } from "@components";


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <>
            <DefaultHead />
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
