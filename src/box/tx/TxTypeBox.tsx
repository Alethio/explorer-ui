import * as React from "react";
import { ValueBox } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { ITheme } from "../../theme/ITheme";

interface ITxTypeBoxProps {
}

export const TxTypeBox: React.StatelessComponent<ITxTypeBoxProps> = ({ children }) => (
    <ValueBox
        colors={(theme: ITheme) => ({
            background: theme.colors.txTypeBoxBackground,
            text: theme.colors.txTypeBoxText
        })}
    >
        { children }
    </ValueBox>
);
