import { KusamaLogo, PolkadotLogoIcon } from "@components/atoms/icons";
import { FaDollarSign } from "react-icons/fa";

interface CurrencyIconProps {
    currency: string;
}

export const CurrencyIcon = ({ currency }: CurrencyIconProps): JSX.Element => {
    //set default icon props
    const props = { height: "20px", width: "20px", color: "#e6007a" };

    //switch case icon props
    const SelectIcon = () => {
        switch (currency) {
            case "Polkadot":
                return <PolkadotLogoIcon {...props} />;
            case "Kusama":
                return <KusamaLogo {...props} />;
            case "Dolar":
                return <FaDollarSign {...props} />;
            default:
                return <PolkadotLogoIcon {...props} />;
        }
    };
    //get icon
    return <SelectIcon />;
};
