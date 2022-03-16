import { Divider, Select, Text } from "@chakra-ui/react";
import * as React from "react";

//-----------------------------------------------------------
export const SelectAccount = ({ accounts, setSender }) => {
    const handleChange = (e) => {
        setSender(accounts[e.target.value]);
    };

    return (
        <>
            <Divider />
            <Text color="black.100">Accounts Found: {accounts.length}</Text>
            <Select onChange={(e) => handleChange(e)} variant="filled">
                <option value={0}>Select your paying wallet</option>
                {accounts.map((account, i) => (
                    <option key={account.address} value={i}>
                        {account.meta.name}
                    </option>
                ))}
            </Select>
            <Divider />
        </>
    );
};
