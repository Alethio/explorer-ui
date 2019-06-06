import * as React from "react";
import { ValueBox, IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { Link } from "plugin-api/component/Link";
import { ITheme } from "../../theme/ITheme";

interface IBlockNumberBoxProps {
    variant?: IValueBoxProps["variant"];
    noLink?: boolean;
    children: number;
}

export class BlockNumberBox extends React.Component<IBlockNumberBoxProps> {
    render() {
        let { children, variant, noLink } = this.props;

        let box = <ValueBox
            colors={(theme: ITheme) => ({
                background: theme.colors.blockColorCode,
                text: theme.colors.blockBoxText
            })}
            variant={variant}
        >
            #{ children }
        </ValueBox>;

        return !noLink ? <Link to={`page://aleth.io/block?blockNumber=${children}`}>{box}</Link> : box;
    }
}
