import * as React from "react";
import { TxsHeatMapItem } from "./TxsHeatMapItem";
import { ITxGeneric } from "./ITxGeneric";

export interface ITxsHeatMapItemsProps {
    transactions: ITxGeneric[];
    bubbleSizes: number[];
    highlightThreshold: number;
    onTxMouseEnter(tx: ITxGeneric): void;
    onTxMouseLeave(tx: ITxGeneric): void;
}

export class TxsHeatMapItems extends React.PureComponent<ITxsHeatMapItemsProps> {
    render() {
        let { bubbleSizes, highlightThreshold } = this.props;

        return <>
            {this.props.transactions.map((tx, idx) => (
                <TxsHeatMapItem
                    key={idx}
                    tx={tx}
                    bubbleSize={bubbleSizes[idx]}
                    highlightThreshold={highlightThreshold}
                    onMouseEnter={this.props.onTxMouseEnter}
                    onMouseLeave={this.props.onTxMouseLeave}
                />
            ))}
        </>;
    }
}
