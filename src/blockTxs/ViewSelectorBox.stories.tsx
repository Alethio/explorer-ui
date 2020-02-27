import React from "react";
import { storiesOf } from "@storybook/react";
import { ViewSelectorBox } from "./ViewSelectorBox";
import { TxsViewMode } from "./TxsViewMode";

storiesOf("block txs/" + ViewSelectorBox.name, module)
    .add("default", () => (
        <div style={{backgroundColor: "#E6ECF5", padding: 10}}>
            <ViewSelectorBox txsViewMode={new TxsViewMode()} />
        </div>
    ));
