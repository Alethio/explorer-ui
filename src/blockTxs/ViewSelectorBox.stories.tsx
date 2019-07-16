import React from "react";
import { storiesOf } from "@storybook/react";
import { ViewSelectorBox } from "./ViewSelectorBox";
import { TxsViewMode } from "./TxsViewMode";

storiesOf("block txs/" + ViewSelectorBox.name, module)
    .add("default", () => (
        <ViewSelectorBox txsViewMode={new TxsViewMode()} />
    ));
