import * as React from "react";
import { ValueBox } from "@alethio/ui/lib/layout/content/box/ValueBox";
import { ByteSize } from "@alethio/ui/lib/data/ByteSize";

export interface IBlockSizeBoxProps {
    bytes: number;
    locale: string;
    translations: {
        bytes: string;
    };
}

export const BlockSizeBox: React.StatelessComponent<IBlockSizeBoxProps> = ({ bytes, locale, translations }) => (
    <ValueBox><ByteSize format={"%d " + translations.bytes} locale={locale}>{bytes}</ByteSize></ValueBox>
);
