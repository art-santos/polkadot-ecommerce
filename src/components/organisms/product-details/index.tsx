import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    Spinner,
} from "@chakra-ui/react";
import { Button } from "@components/atoms/button";
import { PriceTag } from "@components/atoms/price-tag";
import { useCurrencyPrice, useProductInfo } from "src/context/hooks";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const cookies = new Cookies();

export default function ProductDetails({ id }) {
    const { polkadot, kusama, loading, error } = useCurrencyPrice();
    const {
        product,
        loading: loadingProduct,
        error: errorProduct,
    } = useProductInfo(id);
    const router = useRouter();
    //router get route
    const handleCheckout = (id: string): void => {
        cookies.set("item", id, { path: "/" });
        router.push("/checkout");
    };

    if (loadingProduct) {
        return <Loading />;
    }

    if (loading) {
        return <Loading />;
    }

    if (errorProduct) {
        return <Box>Error: {error}</Box>;
    }

    if (product) {
        return (
            <Container maxW={"7xl"}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18, md: 24 }}
                >
                    <Flex>
                        <Image
                            rounded={"md"}
                            alt={"product image"}
                            src={product.image}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={{ base: "100%", sm: "400px", lg: "500px" }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={"header"}>
                            <Heading
                                lineHeight={1.5}
                                fontWeight={600}
                                fontSize={{ base: "2xl", sm: "5xl", lg: "5xl" }}
                            >
                                {product.title}
                            </Heading>
                            {polkadot && kusama && (
                                <Flex
                                    direction={["row"]}
                                    py={4}
                                    alignItems="center"
                                >
                                    <PriceTag
                                        price={product.price}
                                        currency="Polkadot"
                                        exchange={polkadot.polkadot.usd}
                                        size="2xl"
                                    />
                                    <PriceTag
                                        price={product.price}
                                        currency="Kusama"
                                        exchange={kusama.kusama.usd}
                                        size="2xl"
                                    />
                                    <PriceTag
                                        price={product.price}
                                        currency="Dolar"
                                        exchange={1}
                                        size="2xl"
                                    />
                                </Flex>
                            )}
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={"column"}
                        >
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text fontSize={"lg"}>
                                    {product.description}
                                </Text>
                            </VStack>
                        </Stack>

                        <Button
                            rounded={"none"}
                            w={"full"}
                            mt={8}
                            size={"lg"}
                            py={"7"}
                            bg="main.100"
                            color="white"
                            textTransform={"uppercase"}
                            cursor="pointer"
                            onClick={() => handleCheckout(product.id)}
                        >
                            Buy Now
                        </Button>

                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent={"center"}
                        ></Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        );
    }
    return <Loading />;
}

const Loading = () => {
    return (
        <Flex justify="center" align="center" h="100%" m="auto">
            <Spinner size="xl" color="main.100" thickness="5px" />
        </Flex>
    );
};
