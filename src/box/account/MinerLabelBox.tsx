import * as React from "react";
import { ValueBox } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { ITheme } from "../../theme/ITheme";

interface IMinerLabelBoxProps {
}

export const MinerLabelBox: React.StatelessComponent<IMinerLabelBoxProps> = ({ children }) => (
    <ValueBox
        colors={(theme: ITheme) => ({
            background: theme.colors.minerLabelBg,
            text: theme.colors.minerLabelText
        })}
    >
        { children }
    </ValueBox>
);
