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
    StackDivider,
    useColorModeValue,
    Badge,
} from "@chakra-ui/react";
import { Button } from "@components/atoms/button";

export default function ProductDetails(): JSX.Element {
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
                        src={
                            "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
                        }
                        fit={"cover"}
                        align={"center"}
                        w={"100%"}
                        h={{ base: "100%", sm: "400px", lg: "500px" }}
                    />
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={"header"}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                        >
                            Automatic Watch
                        </Heading>
                        <Flex direction={["column", "row"]} alignItems="center" >
                            <Badge
                                borderRadius="16px"
                                fontWeight={300}
                                fontSize={"2xl"}
                            >
                                $350.00 USD
                            </Badge>
                            <Badge
                                borderRadius="16px"
                                fontWeight={300}
                                fontSize={"2xl"}
                            >
                                0.10 KSM
                            </Badge>
                            <Badge
                                borderRadius="16px"
                                fontWeight={300}
                                fontSize={"2xl"}
                            >
                                0.01 DOT
                            </Badge>
                        </Flex>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={"column"}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue(
                                    "gray.200",
                                    "gray.600",
                                )}
                            />
                        }
                    >
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue(
                                    "gray.500",
                                    "gray.400",
                                )}
                                fontSize={"2xl"}
                                fontWeight={"300"}
                            >
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore
                            </Text>
                            <Text fontSize={"lg"}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ad aliquid amet at delectus
                                doloribus dolorum expedita hic, ipsum maxime
                                modi nam officiis porro, quae, quisquam quos
                                reprehenderit velit? Natus, totam.
                            </Text>
                        </VStack>
                    </Stack>

                    <Button
                        as="a"
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        href="/checkout"
                        rounded={"none"}
                        w={"full"}
                        mt={8}
                        size={"lg"}
                        py={"7"}
                        bg="main.100"
                        color="white"
                        textTransform={"uppercase"}
                        _hover={{
                            transform: "translateY(2px)",
                            boxShadow: "lg",
                        }}
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
