import React from "react";
import { storiesOf } from "@storybook/react";
import { TxsHeatMap } from "./TxsHeatMap";
import { TxTooltipContentWrapper } from "../TxTooltipContentWrapper";
// tslint:disable-next-line:import-blacklist
import BigNumber from "bignumber.js";
import { ITxGeneric } from "./ITxGeneric";

interface ITxData extends ITxGeneric {
    value: BigNumber;
}

let maxValue = new BigNumber("5000000000000000000000000");

storiesOf("block txs/" + TxsHeatMap.name, module)
    .add("default", () => (
        <TxsHeatMap
            highlightThreshold={75}
            scaleValuesFn={values => values.map(v => new BigNumber(v).dividedBy(maxValue).multipliedBy(100).toNumber())}
            highlightDataSelector={(tx: ITxData) => tx.value}
            txTooltipThunk={tx => <TxTooltipContentWrapper>{tx && tx.hash}</TxTooltipContentWrapper>}
            transactions={[{
                hash: "0xffaabbccddeeffaabbccddee",
                value: new BigNumber("2000000000000000000000000")
            }, {
                hash: "0xaabbccddeeffaabbccddeeff",
                value: new BigNumber("4000000000000000000000000")
            }] as ITxData[]}
        ></TxsHeatMap>
    ));
