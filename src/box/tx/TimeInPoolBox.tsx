import * as React from "react";
import { ValueBox, IValueBoxProps } from "@alethio/ui/lib/layout/content/box/ValueBox";

interface ITimeInPoolBoxProps {
    seconds: number;
    translation: string;
    colors?: IValueBoxProps["colors"];
}

export const TimeInPoolBox: React.StatelessComponent<ITimeInPoolBoxProps> = ({ seconds, translation, colors }) => (
    <ValueBox colors={colors} borderStyle="dashed">
        { translation.replace(/%d/, "" + seconds) }
    </ValueBox>
);
