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
} from "@chakra-ui/react";
import { Button } from "@components/atoms/button";
import { PriceTag } from "@components/atoms/price-tag";
import { useCurrencyPrice, useProductInfo } from "@recoil/hooks";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function ProductDetails() {
    const { polkadot, kusama, loading, error } = useCurrencyPrice();
    const router = useRouter();

    //router get route
    const handleCheckout = (id: string): void => {
        cookies.set("item", id, { path: "/checkout" });
        router.push("/checkout");
    };

    if (loading) {
        return <Box>Loading...</Box>;
    }
    if (error) {
        return <Box>Error: {error}</Box>;
    }

    if (router.query.id) {
        console.log(router.query.id);
        const id = router.query.id;
        const {
            product,
            loading: loadingProduct,
            error: errorProduct,
        } = useProductInfo(id.toString());
        console.log(product);

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
    return <Box>No product selected</Box>;
}
