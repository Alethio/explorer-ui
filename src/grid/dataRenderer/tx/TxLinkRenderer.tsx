import * as React from "react";
import { IGridFieldRenderer } from "@alethio/ui/lib/control/grid/state/IGridFieldRenderer";
import { Hash } from "@alethio/ui/lib/data/Hash";
import { GridLink } from "../../GridLink";

export class TxLinkRenderer<T> implements IGridFieldRenderer<T> {
    constructor(
        private gridFieldDataGetter: (f: T) => string
    ) {
    }

    render(f: T) {
        let hash = this.gridFieldDataGetter(f);
        return (
            <GridLink to={`page://aleth.io/tx?txHash=${hash}`} >
                <Hash>{ hash }</Hash>
            </GridLink>
        );
    }
}
