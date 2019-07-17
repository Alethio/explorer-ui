import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from "@alethio/ui/lib/control/grid/Grid";
import { GridFields } from "@alethio/ui/lib/control/grid/state/GridFields";
import { GridSortingOptions } from "@alethio/ui/lib/control/grid/state/GridSortingOptions";
import { AccountHashRenderer } from "./account/AccountHashRenderer";
import { AccountLinkRenderer } from "./account/AccountLinkRenderer";
import { BlockLinkRenderer } from "./block/BlockLinkRenderer";
import { TxLinkRenderer } from "./tx/TxLinkRenderer";

interface ISampleData {
    hash: string;
    blockNumber: number;
}

class MyGridFields extends GridFields<ISampleData> {
    constructor() {
        super();
        this.fields = [{
            fieldKey: "accountHash",
            getFieldValue: d => d.hash,
            isSortable: true,
            label: "Account hash",
            selected: true,
            type: "string",
            renderer: new AccountHashRenderer("0xaabbccddeeffaabbccdddeeffaa", f => f.hash)
        }, {
            fieldKey: "accountHashLink",
            getFieldValue: d => d.hash,
            isSortable: true,
            label: "Account hash link",
            selected: true,
            type: "string",
            renderer: new AccountLinkRenderer(f => f.hash)
        }, {
            fieldKey: "blockLink",
            getFieldValue: d => d.blockNumber,
            isSortable: true,
            label: "Block link",
            selected: true,
            type: "number",
            renderer: new BlockLinkRenderer("en-US", f => f.blockNumber)
        }, {
            fieldKey: "txLink",
            getFieldValue: d => d.hash,
            isSortable: true,
            label: "Tx link",
            selected: true,
            type: "string",
            renderer: new TxLinkRenderer(f => f.hash)
        }];
    }
}

storiesOf("dataRenderers", module)
    .addParameters({
        info: {
            disable: true
        }
    })
    .add("default", () => (
        <>
            <Grid<ISampleData>
                fields={new MyGridFields()}
                loadMoreText="Load more"
                noDataText="No data to show"
                sortingOptions={new GridSortingOptions()}
                rows={[
                    { key: "hash1", data: { hash: "0xffaabbccddeeffaabbccdddeeff", blockNumber: 600000 } },
                    { key: "hash2", data: { hash: "0xffaabbccddeeffaabbccdddeeff", blockNumber: 600000 } },
                    { key: "hash3", data: { hash: "0xaabbccddeeffaabbccdddeeffaa", blockNumber: 600000 } },
                    { key: "hash4", data: { hash: "0xffaabbccddeeffaabbccdddeeff", blockNumber: 600000 } }
                ]}
            />
        </>
    ));
