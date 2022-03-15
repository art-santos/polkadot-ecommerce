import { Badge, chakra } from "@chakra-ui/react";

interface CurrencyBadgeProps {
    currency: string;
}

export const CurrencyBadge = ({ currency }: CurrencyBadgeProps): JSX.Element => {
    //switch case currency kusama, polkadt, dolar

    const getCurrency = () => {
        switch (currency) {
            case "Kusama":
                return "KSM";
            case "Polkadot":
                return "DOT";
            case "Dolar":
                return "USD";
            default:
                return "KSM";
        }
    };

    return (
        <Badge color="white" bgColor="main.100">
            <chakra.strong>{getCurrency(currency)}</chakra.strong>
        </Badge>
    );
};
