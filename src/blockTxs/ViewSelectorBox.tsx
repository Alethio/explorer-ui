import styled from "@alethio/ui/lib/styled-components";
import * as React from "react";
import { observer } from "mobx-react";
import { ViewSelectorButton } from "./ViewSelectorButton";
import { TxsViewMode } from "./TxsViewMode";
import { ListViewIcon } from "@alethio/ui/lib/icon/ListViewIcon";
import { GridViewIcon } from "@alethio/ui/lib/icon/GridViewIcon";

const HEIGHT = 32;
const ViewSelectorRoot = styled.div`
    padding: 0 7px;
    display: flex;
    width: ${2 * HEIGHT + 16}px;
    justify-content: space-between;
`;

interface IViewSelectorBoxProps {
    txsViewMode: TxsViewMode;
}

@observer
export class ViewSelectorBox extends React.Component<IViewSelectorBoxProps> {
    private onListClick = () => {
        this.props.txsViewMode.setToTableList();
    }
    private onGridClick = () => {
        this.props.txsViewMode.setToHeatMapGrid();
    }
    render() {
        return (
            <ViewSelectorRoot>
                <ViewSelectorButton active={this.props.txsViewMode.isTableList} onClick={this.onListClick}>
                    <ListViewIcon />
                </ViewSelectorButton>
                <ViewSelectorButton active={this.props.txsViewMode.isHeatMapGrid} onClick={this.onGridClick}>
                    <GridViewIcon />
                </ViewSelectorButton>
            </ViewSelectorRoot>
        );
    }
}
