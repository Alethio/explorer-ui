import * as React from "react";
import { ValueBox } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { ITheme } from "../../theme/ITheme";

interface IAccountAliasBoxProps {
}

export const AccountAliasBox: React.StatelessComponent<IAccountAliasBoxProps> = ({ children }) => (
    <ValueBox
        colors={(theme: ITheme) => ({
            background: theme.colors.accountAliasBg,
            text: theme.colors.accountAliasText
        })}
    >
        { children }
    </ValueBox>
);
