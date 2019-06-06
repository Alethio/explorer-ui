import * as React from "react";
import { ValueBox } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { ITheme } from "../../theme/ITheme";

interface IAccountTypeBoxProps {
}

export const AccountTypeBox: React.StatelessComponent<IAccountTypeBoxProps> = ({ children }) => (
    <ValueBox
        colors={(theme: ITheme) => ({
            background: theme.colors.accountTypeBoxBackground,
            text: theme.colors.accountTypeBoxText
        })}
    >
        { children }
    </ValueBox>
);
