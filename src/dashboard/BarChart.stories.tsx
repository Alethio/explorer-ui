import React from "react";
import { storiesOf } from "@storybook/react";
import { BarChart } from "./BarChart";

interface IChartItem {
    name: string;
}

storiesOf(BarChart.name, module)
    .add("default", () => (
        <BarChart<IChartItem>
            data={new Array(50).fill(0).map((v, i) => ({
                key: i,
                value: 20 * i,
                data: {
                    name: "item " + i
                }
            }))}
            height={80}
            tooltipThunk={i => i.value}
            linkThunk={i => "page://non-existent"}
        ></BarChart>
    ));
