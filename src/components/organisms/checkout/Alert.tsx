import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

export const TransactionMessage = ({ transactionHash, paymentError }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const router = useRouter();

    React.useEffect(() => {
        if (transactionHash) {
            setIsOpen(true);
        }
        if (paymentError) {
            setIsOpen(true);
        }
    }, [transactionHash, paymentError]);

    const handleClick = () => {
        console.log('a')
        if (transactionHash) {
            router.push("/success");
        } else {
            setIsOpen(false);
        }
    };
    return (
        <>
            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader color="main.100">
                        {transactionHash ? "Success!" : "Error =("}
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        {transactionHash
                            ? `Your transaction was a success. here's your hash ${transactionHash}`
                            : "Something went wrong. Please try again."}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button
                            color="white"
                            bgColor="main.100"
                            onClick={handleClick}
                        >
                            Ok
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};
