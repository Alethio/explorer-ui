import * as React from "react";
import { DomNodeProxy } from "@alethio/ui/lib/util/react/DomNodeProxy";
import { Link } from "plugin-api/component/Link";
import { TxBubble } from "./TxBubble";
import { ITxGeneric } from "./ITxGeneric";

export interface ITxsHeatMapItemProps {
    tx: ITxGeneric;
    bubbleSize: number;
    highlightThreshold: number;
    onMouseEnter(tx: ITxGeneric): void;
    onMouseLeave(tx: ITxGeneric): void;
}

export class TxsHeatMapItem extends React.PureComponent<ITxsHeatMapItemProps> {
    render() {
        return (
            <DomNodeProxy
                onMount={el => {
                    el.addEventListener("mouseenter", this.handleMouseEnter);
                    el.addEventListener("mouseleave", this.handleMouseLeave);
                }}
                onUnmount={el => {
                    el.removeEventListener("mouseenter", this.handleMouseEnter);
                    el.removeEventListener("mouseleave", this.handleMouseLeave);
                }}
            >
                <Link to={`page://aleth.io/tx?txHash=${this.props.tx.hash}`}>
                    <TxBubble size={this.props.bubbleSize} highlightThreshold={this.props.highlightThreshold} />
                </Link>
            </DomNodeProxy>
        );
    }

    private handleMouseEnter = () => {
        this.props.onMouseEnter(this.props.tx);
    }

    private handleMouseLeave = () => {
        this.props.onMouseLeave(this.props.tx);
    }
}
