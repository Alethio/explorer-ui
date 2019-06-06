import * as React from "react";
import { IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { HashLinkValueBox } from "../HashLinkValueBox";
import { ITheme } from "../../theme/ITheme";

interface ITxHashBoxProps {
    variant?: IValueBoxProps["variant"];
    children: string;
    noLink?: boolean;
    noTooltip?: boolean;
}

export const TxHashBox: React.StatelessComponent<ITxHashBoxProps> = ({
    children, variant, noLink, noTooltip
}) => (
    <HashLinkValueBox
        colors={(theme: ITheme) => ({
            background: theme.colors.txColorCode,
            text: theme.colors.txBoxText
        })}
        variant={variant}
        linkTo={!noLink ? `page://aleth.io/tx?txHash=${children}` : void 0}
        noTooltip={noTooltip}
    >
        { children }
    </HashLinkValueBox>
);
