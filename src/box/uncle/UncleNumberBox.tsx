import * as React from "react";
import { ValueBox, IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { ITheme } from "../../theme/ITheme";

interface IUncleNumberBoxProps {
    variant?: IValueBoxProps["variant"];
    children: number;
}

export class UncleNumberBox extends React.Component<IUncleNumberBoxProps> {
    render() {
        let { children, variant } = this.props;

        return <ValueBox
            colors={(theme: ITheme) => ({
                background: theme.colors.unclesBoxBg,
                text: theme.colors.unclesBoxText,
                border: theme.colors.unclesBoxBorder
            })}
            variant={variant}
        >
            #{ children }
        </ValueBox>;
    }
}
