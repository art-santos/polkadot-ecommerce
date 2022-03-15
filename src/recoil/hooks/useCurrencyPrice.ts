import useSWR from "swr";

const POLKADOT_API_BASE_URL =
    "https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd";
const KUSAMA_API_BASE_URL =
    "https://api.coingecko.com/api/v3/simple/price?ids=kusama&vs_currencies=usd";

interface ICurrencyPriceProps {
    polkadot: any;
    kusama: any;
    isLoading: boolean;
    isError: Error;
}

export const useCurrencyPrice = (): ICurrencyPriceProps => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data: polkadot } = useSWR(POLKADOT_API_BASE_URL, fetcher);
    const { data: kusama } = useSWR(KUSAMA_API_BASE_URL, fetcher);
    return {
        polkadot,
        kusama,
        isLoading: !Error || !polkadot || !kusama,
        isError: new Error(),
    };
};
