import * as React from "react";
import { IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { HashLinkValueBox } from "../HashLinkValueBox";
import { observer } from "mobx-react";
import { ITheme } from "../../theme/ITheme";

export interface IUncleHashBoxProps {
    children: string;
    variant?: IValueBoxProps["variant"];
    linkTo?: string;
}

@observer
export class UncleHashBox extends React.Component<IUncleHashBoxProps> {
    render() {
        let { linkTo } = this.props;

        return (
            <HashLinkValueBox
                colors={(theme: ITheme) => ({
                    background: theme.colors.unclesBoxBg,
                    text: theme.colors.unclesBoxText
                })}
                variant={this.props.variant}
                linkTo={linkTo}
            >{this.props.children}</HashLinkValueBox>
        );
    }
}
