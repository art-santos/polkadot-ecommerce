import useSWR from "swr";

export const useProductInfo = (productId: string): string => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data: product } = useSWR(
        `https://fakestoreapi.com/products/${productId}`,
        fetcher,
    );
    return {
        product,
        isLoading: !Error || !product,
        isError: new Error(),
    };
};
