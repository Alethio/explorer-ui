import * as React from "react";
import { HashLinkValueBox, IHashLinkValueBoxProps } from "../HashLinkValueBox";
import { ITheme } from "../../theme/ITheme";

interface IParentHashBoxProps {
    linkTo?: IHashLinkValueBoxProps["linkTo"];
    children: string;
}

export const ParentHashBox: React.StatelessComponent<IParentHashBoxProps> = ({ children, linkTo }) => (
    <HashLinkValueBox
        colors={(theme: ITheme) => ({
            background: theme.colors.parentHashBoxBg,
            text: theme.colors.parentHashBoxText
        })}
        linkTo={linkTo}
    >
        { children }
    </HashLinkValueBox>
);
