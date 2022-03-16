import useSWR from "swr";

interface IProductsProps {
    products: any;
    isLoading: boolean;
    isError: Error;
}

export const useProducts = (): IProductsProps => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data: products } = useSWR(
        "https://fakestoreapi.com/products",
        fetcher,
    );
    return {
        products,
        isLoading: !Error || !products,
        isError: new Error(),
    };
};
