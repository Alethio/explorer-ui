import React from "react";
import { storiesOf } from "@storybook/react";
import { QrCode } from "./QrCode";

storiesOf(QrCode.name, module)
    .add("default", () => (
        <QrCode value="asdfg" logger={console} />
    ));
