import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";
import { Button } from "@components/atoms/button";
import { KusamaLogo, PolkadotLogoIcon } from "@components/atoms/icons";
import { FaDollarSign } from "react-icons/fa";


const data = {
    isNew: true,
    imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
};

export function ProductCard(): JSX.Element {
    return (
        <Flex p={1} w="full" alignItems="center" justifyContent="center">
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
                    src={data.imageURL}
                    alt={`Picture of ${data.name}`}
                    roundedTop="lg"
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
                            {data.name}
                        </Box>
                    </Flex>

                    <Flex
                        justifyContent="center"
                        direction="column"
                        alignContent="center"
                    >
                        <Flex
                            fontSize="xl"
                            color="black.100"
                            justify="space-around"
                            alignItems="center"
                            m="auto"
                            w="80%"
                        >
                            <Box as="span" color="gray.200" fontSize="md">
                                <PolkadotLogoIcon
                                    height="20px"
                                    width="20px"
                                    color="#e6007a"
                                />
                            </Box>
                            {data.price.toFixed(2)} (Dots)
                        </Flex>
                        <Flex
                            fontSize="xl"
                            color="black.100"
                            justify="space-around"
                            alignItems="center"
                            m="auto"
                            w="80%"
                        >
                            <Box as="span" color="gray.200" fontSize="md">
                                <KusamaLogo
                                    height="20px"
                                    width="20px"
                                    color="#e6007a"
                                />
                            </Box>
                            {data.price.toFixed(2)} (KSM)
                        </Flex>
                        <Flex
                            fontSize="xl"
                            color="black.100"
                            justify="space-around"
                            alignItems="center"
                            m="auto"
                            w="80%"
                        >
                            <Box as="span" color="gray.200" fontSize="md">
                                <FaDollarSign
                                    size={22}
                                    style={{ color: "#e6007a" }}
                                />
                            </Box>
                            {data.price.toFixed(2)} (U$D)
                        </Flex>
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
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-ignore
                            href="/checkout"
                            size="lg"
                            bg="main.100"
                            color="white"
                            fontWeight="700"
                            w="150px"
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
                            as="a"
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-ignore
                            href="/product/test"
                            size="lg"
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
}

export default ProductCard;
