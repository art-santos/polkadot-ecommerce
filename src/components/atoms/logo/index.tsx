import React from "react";

import SvgPolkadotLogo from "../icons/PolkadotLogoIcon";

export const Logo: React.FC = () => {
    return (
        <SvgPolkadotLogo
            data-test="icon"
            color="white"
            width="180"
            height="39"
        />
    );
};
