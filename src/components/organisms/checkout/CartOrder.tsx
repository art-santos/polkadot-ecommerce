import {
    Flex,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Button } from "@components/atoms/button";
import { PriceTag } from "@components/atoms/price-tag";
import * as React from "react";
import { FaDollarSign } from "react-icons/fa";
import { OrderItem } from "./OrderItem";
import { useCurrencyPrice, useProductInfo } from "src/context/hooks";
import Cookies from "universal-cookie";
import { ApiPromise, WsProvider } from "@polkadot/api";
import PriceContext from "src/context/contexts/priceContext";

import {
    web3Accounts,
    web3Enable,
    web3FromSource,
} from "@polkadot/extension-dapp";

import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Loading } from "./Loading";
import { SelectNetwork } from "./SelectNetwork";
import { SelectAccount } from "./SelectAccount";

export const CartOrder = ({
    setTransactionHash,
    setPaymentError,
}): JSX.Element => {
    const cookie = new Cookies();
    const { polkadot, kusama, loading: loadingCurrency } = useCurrencyPrice();
    const { product, loading, error } = useProductInfo(cookie.get("item"));
    const [connected, setConnected] = React.useState(false);
    const [accounts, setAccounts] = React.useState<[]>([]);
    const [sender, setSender] = React.useState({});
    const [network, setNetwork] = React.useState("");
    const [polkadotTokens, setPolkadotTokens] = React.useState(0);
    const [kusamaTokens, setKusamaTokens] = React.useState(0);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Heading>Error!</Heading>;
    }

    if (product) {
        return (
            <Stack
                spacing="8"
                borderWidth="1px"
                borderColor="gray.100"
                rounded="lg"
                padding="8"
                width="full"
                bgColor="white"
            >
                <Heading size="md">
                    Order: <Text color="main.100">{product.title}</Text>
                </Heading>
                {product ? (
                    <>
                        <Stack spacing="6">
                            <OrderItem
                                label="Total DOT"
                                price={product.price}
                                currency={"Polkadot"}
                            />
                            <OrderItem
                                label="Total KSM"
                                price={product.price}
                                currency={"Kusama"}
                            />

                            <Flex justify="space-between">
                                <Text fontSize="lg" fontWeight="semibold">
                                    Total
                                </Text>
                                <Text fontSize="xl" fontWeight="extrabold">
                                    <PriceTag
                                        exchange={1}
                                        size="2xl"
                                        price={product.price}
                                        currency="Dolar"
                                    />
                                </Text>
                            </Flex>
                        </Stack>
                        {accounts.length > 0 && (
                            <>
                                <SelectAccount
                                    accounts={accounts}
                                    setSender={setSender}
                                />
                                <SelectNetwork setNetwork={setNetwork} />
                            </>
                        )}
                        {!loadingCurrency ? (
                            connected ? (
                                    <ButtonPay
                                        accounts={accounts}
                                        sender={sender}
                                        network={network}
                                        setTransactionHash={setTransactionHash}
                                        setPaymentError={setPaymentError}
                                        polkadotTokens={polkadotTokens}
                                        kusamaTokens={kusamaTokens}
                                    />
                            ) : (
                                <ButtonConnect
                                    setAccounts={setAccounts}
                                    setConnected={setConnected}
                                    setPolkadotTokens={setPolkadotTokens}
                                    setKusamaTokens={setKusamaTokens}
                                    polkadot={polkadot}
                                    kusama={kusama}
                                    product={product}
                                />
                            )
                        ) : (
                            <>
                                <Loading />
                            </>
                        )}
                    </>
                ) : (
                    <Loading />
                )}
            </Stack>
        );
    }
    return <Loading />;
};

export default CartOrder;

//-----------------------------------------------------------
//Connect Account
const ButtonConnect = ({ setAccounts, setConnected, setPolkadotTokens, setKusamaTokens, polkadot, kusama, product }) => {
    const handleConnect = async (): Promise<void> => {
        try {
            if (web3Enable) {
                web3Enable("Polkadot JS").then(() => {
                    web3Accounts().then((accounts) => {
                        setAccounts(accounts);
                        setConnected(true);
                    });
                });
            }
            web3Accounts().then((accounts) => {
                setAccounts(accounts);
                setConnected(true);
            });
            setPolkadotTokens(
                (product.price / polkadot.polkadot.usd) * 1000000,
            );
            setKusamaTokens(
                (product.price / kusama.kusama.usd) * 1000000000000,
            );
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Button
            bg="main.100"
            color="white"
            w="full"
            size="lg"
            fontSize="md"
            leftIcon={<MdOutlineAccountBalanceWallet />}
            onClick={() => {
                handleConnect();
            }}
        >
            Connect Wallet
        </Button>
    );
};
//-----------------------------------------------------------
//Pay Order
const ButtonPay = ({
    sender,
    network,
    setTransactionHash,
    setPaymentError,
}) => {
    const { kusamaTokens, polkadotTokens } = React.useContext(PriceContext);

    const handlePay = async (): Promise<void> => {
        const provider = new WsProvider(network);

        const polkadotApi = await ApiPromise.create({
            provider: provider,
        });

        const transferExtrinsic = polkadotApi.tx.balances.transfer(
            "5F6uW9oe3EPDDvz813WwYPtbwQkJLPsyJhNK3r1fJ79gf6GG",
            network === "Polkadot" ? polkadotTokens : kusamaTokens,
        );
        const injector = await web3FromSource(sender.meta.source);

        transferExtrinsic
            .signAndSend(
                sender.address,
                { signer: injector.signer },
                ({ status }) => {
                    if (status.isInBlock) {
                        setTransactionHash(status.asInBlock.toString());
                    }
                },
            )
            .catch((error: any) => {
                setTransactionHash(undefined);
                setPaymentError(error);
            });
    };
    return (
        <Button
            bg="main.100"
            color="white"
            w="full"
            size="lg"
            fontSize="md"
            leftIcon={<FaDollarSign />}
            onClick={handlePay}
            disabled={!sender || !network}
        >
            Pay
        </Button>
    );
};
