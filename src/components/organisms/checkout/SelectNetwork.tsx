import { Divider, Select } from "@chakra-ui/react";
import * as React from "react";

//-----------------------------------------------------------
//SELECT NETWORK
export const SelectNetwork = ({ setNetwork }) => {
    const networks = [
        { name: "Polkadot", link: "wss://rpc.polkadot.io" },
        { name: "Kusama", link: "wss://kusama-rpc.polkadot.io" },
        { name: "Westend (testnet)", link: "wss://westend-rpc.polkadot.io" },
    ];

    const handleChange = (e) => {
        setNetwork(e.target.value);
    };

    return (
        <>
            <Select onChange={(e) => handleChange(e)} variant="filled">
                <option value={networks[0].link}>Select your network</option>
                {networks.map((network, i) => (
                    <option key={network.name} value={network.link}>
                        {network.name}
                    </option>
                ))}
            </Select>
            <Divider />
        </>
    );
};
