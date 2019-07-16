import React from "react";
import { storiesOf } from "@storybook/react";
import { TxHighlightSelector } from "./TxHighlightSelector";
import { HighlightFields } from "./HighlightFields";
import { Translation } from "@alethio/cms";

enum TxHighlightFieldKey {
    Value = "value"
}

interface ITxData {
    hash: string;
    value: number;
}

class TxHighlightFields extends HighlightFields<ITxData, TxHighlightFieldKey> {
    constructor() {
        super();
        this.fields = [{
            key: TxHighlightFieldKey.Value,
            getLabel: (t) => t.get("value"),
            getData: (d) => d.value
        }];
        this.setSelectedField(TxHighlightFieldKey.Value);
    }
}

let translation = new Translation({
    value: "Value"
});

storiesOf("block txs/" + TxHighlightSelector.name, module)
    .addDecorator(s => <div style={{ display: "flex", padding: 16 }}>{s()}</div>)
    .add("default", () => (
        <TxHighlightSelector fields={new TxHighlightFields()} translation={translation}></TxHighlightSelector>
    ));
