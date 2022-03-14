import { Image, ImageProps } from "@chakra-ui/react";
import * as React from "react";

function SvgPolkadotLogo(props: ImageProps) {
    return (
        <Image
            height={props.height}
            width={props.width}
            src="/icons/logo-polkadot.svg"
            alt="Polkadot Logo"
        />
    );
}

export default SvgPolkadotLogo;
