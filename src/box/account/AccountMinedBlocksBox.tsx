import * as React from "react";
import { ValueBox, IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { Number } from "@alethio/ui/lib/data/Number";
import { ITheme } from "../../theme/ITheme";

interface IAccountMinedBlocksBoxProps {
    variant?: IValueBoxProps["variant"];
    locale: string;
    children: number;
}

export class AccountMinedBlocksBox extends React.Component<IAccountMinedBlocksBoxProps> {
    render() {
        let { children, variant, locale } = this.props;

        return (
            <ValueBox
                colors={(theme: ITheme) => ({
                    background: theme.colors.blockColorCode,
                    text: theme.colors.blockBoxText
                })}
                variant={variant}
            >
                <Number locale={locale} value={ children } />
            </ValueBox>
        );

    }
}
