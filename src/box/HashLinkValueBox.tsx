import * as React from "react";
import { IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { Link, ILinkProps } from "plugin-api/component/Link";
import { HashValueBox } from "@alethio/ui/lib/data/box/HashValueBox";

export interface IHashLinkValueBoxProps {
    children: string;
    variant?: IValueBoxProps["variant"];
    colors?: IValueBoxProps["colors"];
    Icon?: IValueBoxProps["Icon"];
    linkTo?: ILinkProps["to"];
    noTooltip?: boolean;
}

export class HashLinkValueBox extends React.Component<IHashLinkValueBoxProps> {
    render() {
        let { children, linkTo } = this.props;

        let box = <HashValueBox
            variant={this.props.variant}
            colors={this.props.colors}
            Icon={this.props.Icon}
            noTooltip={this.props.noTooltip}
        >
            { children }
        </HashValueBox>;

        return linkTo ? <Link to={linkTo}>{box}</Link> : box ;
    }
}
