import styled from "@alethio/ui/lib/styled-components";
import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Popover } from "@alethio/ui/lib/overlay/Popover";
import { MultiHover } from "@alethio/ui/lib/util/react/MultiHover";
import { TxsHeatMapItems } from "./TxsHeatMapItems";
import { ITxGeneric } from "./ITxGeneric";
import { BigNumber } from "@alethio/ui/lib/util/BigNumber";

const TxsHeatMapRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding: 2px 0px;
`;

export interface ITxsHeatMapProps {
    /** Non-empty transactions array */
    transactions: ITxGeneric[];
    multiHover?: MultiHover<ITxGeneric>;
    highlightThreshold: number;
    highlightDataSelector(t: ITxGeneric): number | BigNumber;
    scaleValuesFn(values: (number | BigNumber)[]): number[];
    txTooltipThunk(t: ITxGeneric): JSX.Element;
}

@observer
export class TxsHeatMap extends React.Component<ITxsHeatMapProps> {
    private rootEl: HTMLElement;
    @observable.ref
    private hoveredTx: ITxGeneric | undefined;
    private multiHover: MultiHover<ITxGeneric>;

    constructor(props: ITxsHeatMapProps) {
        super(props);

        this.setupMultiHover(this.props.multiHover);
    }

    private setupMultiHover(multiHover: MultiHover<ITxGeneric> | undefined) {
        if (!multiHover) {
            multiHover = new MultiHover({ enterDelay: 400, leaveDelay: 400 });
        }
        this.multiHover = multiHover;
        this.multiHover.onActiveChange.subscribe(this.handleActiveChange);
    }

    private handleActiveChange = (tx: ITxGeneric | undefined) => this.hoveredTx = tx;

    componentDidUpdate(prevProps: ITxsHeatMapProps) {
        if (this.props.multiHover !== prevProps.multiHover) {
            this.setupMultiHover(this.props.multiHover);
        }
    }

    componentWillUnmount() {
        this.multiHover.onActiveChange.unsubscribe(this.handleActiveChange);
    }

    render() {
        let values = this.props.transactions.map(tx => this.props.highlightDataSelector(tx));
        let bubbleSizes = this.props.scaleValuesFn(values);

        return (
            <TxsHeatMapRoot innerRef={ref => this.rootEl = ref}>
                <TxsHeatMapItems
                    transactions={this.props.transactions}
                    bubbleSizes={bubbleSizes}
                    highlightThreshold={this.props.highlightThreshold}
                    onTxMouseEnter={this.handleTxEnter}
                    onTxMouseLeave={this.handleTxLeave}
                />
                <Popover
                    visible={this.hoveredTx !== void 0}
                    placement="bottom-start"
                    offset={8}
                    alignmentOffset={-8}
                    noFlip
                    referenceElement={() => this.rootEl}
                    content={<div onMouseEnter={this.handleTooltipEnter} onMouseLeave={this.handleTooltipLeave}>
                        { this.props.txTooltipThunk(this.hoveredTx!) }
                    </div>}
                >
                    <div />
                </Popover>
            </TxsHeatMapRoot>
        );
    }

    private handleTxEnter = (tx?: ITxGeneric) => {
        this.multiHover.enter(tx);
    }

    private handleTxLeave = (tx?: ITxGeneric) => {
        this.multiHover.leave();
    }

    private handleTooltipEnter = () => {
        this.multiHover.enter(this.hoveredTx);
    }

    private handleTooltipLeave = () => {
        this.multiHover.leave();
    }
}
