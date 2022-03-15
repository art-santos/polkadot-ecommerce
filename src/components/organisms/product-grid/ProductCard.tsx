import { Flex, Box, chakra, Badge } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "@components/atoms/button";
import { PriceTag } from "@components/atoms/price-tag";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const cookies = new Cookies();

export const ProductCard = ({ product, price }): JSX.Element => {
    const router = useRouter();

    const handleCheckout = (id: string): void => {
        cookies.set("item", id, { path: "/checkout" });
        router.push("/checkout");
    };

    return (
        <Flex
            p={1}
            w="full"
            minW="100%"
            maxW="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                bg="white"
                maxW="sm"
                borderWidth="3px"
                borderColor="gray.100"
                rounded="lg"
                shadow="lg"
                position="relative"
                transition="all 0.2s"
                _hover={{
                    borderColor: "pink.100",
                    borderWidth: "3px",
                    shadow: "none",
                }}
            >
                <Image
                    src={product.image}
                    alt={`Picture of ${product.title}`}
                    height="300px"
                    width="400px"
                    objectFit="cover"
                />

                <Box p="6">
                    <Flex
                        mt="1"
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            m="auto"
                            pb="10px"
                        >
                            {product.title}
                        </Box>
                    </Flex>

                    <Flex
                        justifyContent="center"
                        direction="column"
                        alignContent="center"
                    >
                        <PriceTag
                            price={product.price}
                            currency="Polkadot"
                            exchange={price.dot}
                        />
                        <PriceTag
                            price={product.price}
                            currency="Kusama"
                            exchange={price.ksm}
                        />
                        <PriceTag
                            price={product.price}
                            currency="Dolar"
                            exchange={1}
                        />
                    </Flex>
                    <Flex
                        justifyContent="center"
                        flexDirection="column"
                        alignContent="center"
                        textAlign="center"
                        pt={5}
                    >
                        <Button
                            as="a"
                            size="lg"
                            bg="main.100"
                            color="white"
                            fontWeight="700"
                            w="150px"
                            onClick={() => {
                                handleCheckout(product.id);
                            }}
                            cursor="pointer"
                        >
                            Buy Now
                        </Button>
                    </Flex>
                    <Flex
                        justifyContent="center"
                        flexDirection="column"
                        alignContent="center"
                        textAlign="center"
                        pt={2}
                    >
                        <Button
                            size="lg"
                            as="a"
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-ignore
                            href={`/product/${product.id}`}
                            bg="black.100"
                            color="white"
                            fontWeight="700"
                            w="150px"
                        >
                            See Details
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
};

export default ProductCard;
