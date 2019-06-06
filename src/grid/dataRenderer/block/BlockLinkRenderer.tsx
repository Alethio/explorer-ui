import * as React from "react";
import { IGridFieldRenderer } from "@alethio/ui/lib/control/grid/state/IGridFieldRenderer";
import { Number } from "@alethio/ui/lib/data/Number";
import { GridLink } from "../../GridLink";

export class BlockLinkRenderer<T> implements IGridFieldRenderer<T> {
    constructor(
        private locale: string,
        private gridFieldDataGetter: (f: T) => number
    ) {
    }

    render(f: T) {
        let blockNumber = this.gridFieldDataGetter(f);
        return (
            <GridLink to={`page://aleth.io/block?blockNumber=${blockNumber}`}>
                <Number locale={this.locale} value={blockNumber} />
            </GridLink>
        );
    }
}
