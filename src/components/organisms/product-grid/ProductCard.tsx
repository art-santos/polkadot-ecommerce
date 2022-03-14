import { Flex, Box, Image, useColorModeValue } from "@chakra-ui/react";
import { Button } from "@components/atoms/button";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const data = {
    isNew: true,
    imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
};

interface RatingProps {
    rating: number;
    numReviews: number;
}

function Rating({ rating, numReviews }: RatingProps) {
    return (
        <Box d="flex" alignItems="center">
            {Array(5)
                .fill("")
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: "1" }}
                                color={i < rating ? "teal.500" : "gray.300"}
                            />
                        );
                    }
                    if (roundedRating - i === 0.5) {
                        return (
                            <BsStarHalf key={i} style={{ marginLeft: "1" }} />
                        );
                    }
                    return <BsStar key={i} style={{ marginLeft: "1" }} />;
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && "s"}
            </Box>
        </Box>
    );
}

export function ProductCard(): JSX.Element {
    return (
        <Flex p={10} w="full" alignItems="center" justifyContent="center">
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
                        >
                            {data.name}
                        </Box>
                    </Flex>

                    <Flex
                        justifyContent="center"
                        direction="column"
                        alignContent="center"
                    >
                        <Box
                            fontSize="xl"
                            fontWeight="700"
                            color="black.100"
                            m="auto"
                        >
                            <Box as="span" color="gray.200" fontSize="md">
                                dot
                            </Box>
                            {data.price.toFixed(2)}
                        </Box>
                        <Box
                            fontSize="xl"
                            fontWeight="700"
                            color="black.100"
                            m="auto"
                        >
                            <Box as="span" color="gray.200" fontSize="md">
                                ksm
                            </Box>
                            {data.price.toFixed(2)}
                        </Box>
                        <Box
                            fontSize="xl"
                            fontWeight="700"
                            color="black.100"
                            m="auto"
                        >
                            <Box as="span" color="gray.200" fontSize="md">
                                $
                            </Box>
                            {data.price.toFixed(2)}
                        </Box>
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
