import * as React from "react";
import { HashLinkValueBox } from "../HashLinkValueBox";
import { ITheme } from "../../theme/ITheme";

interface IBlockHashBoxProps {
    children: string;
    linkTo?: string;
}

export class BlockHashBox extends React.Component<IBlockHashBoxProps> {
    render() {
        let { children, linkTo } = this.props;
        return (
            <HashLinkValueBox
                colors={(theme: ITheme) => ({
                    background: theme.colors.blockColorCode,
                    text: theme.colors.blockBoxText
                })}
                linkTo={linkTo}
            >
                { children }
            </HashLinkValueBox>
        );
    }
}
