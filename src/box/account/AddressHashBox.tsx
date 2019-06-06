import * as React from "react";
import { HashLinkValueBox } from "../HashLinkValueBox";
import { IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { ITheme } from "../../theme/ITheme";

interface IAddressHashBoxProps {
    variant?: IValueBoxProps["variant"];
    children: string;
    Icon?: IValueBoxProps["Icon"];
    noLink?: boolean;
}

export const AddressHashBox: React.StatelessComponent<IAddressHashBoxProps> = ({ children, variant, Icon, noLink }) => (
    <HashLinkValueBox
        colors={(theme: ITheme) => ({
            background: theme.colors.addressHashBoxBg,
            text: theme.colors.valueBox.primary.text
        })}
        variant={variant}
        Icon={Icon}
        linkTo={!noLink ? `page://aleth.io/account?accountHash=${children}` : void 0}
    >
        { children }
    </HashLinkValueBox>
);
