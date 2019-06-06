import { IGridFieldRenderer } from "@alethio/ui/lib/control/grid/state/IGridFieldRenderer";
import { HashRenderer } from "@alethio/ui/lib/data/gridRenderer/HashRenderer";
import { AccountLinkRenderer } from "./AccountLinkRenderer";

export class AccountHashRenderer<T> implements IGridFieldRenderer<T> {
    private hashRenderer: HashRenderer<T>;
    private hashLinkRenderer: AccountLinkRenderer<T>;

    constructor(
        private accountAddress: string | undefined,
        private gridFieldDataGetter: (f: T) => string
    ) {
        this.hashRenderer = new HashRenderer(gridFieldDataGetter);
        this.hashLinkRenderer = new AccountLinkRenderer(gridFieldDataGetter);
    }

    render(f: T) {
        let hash = this.gridFieldDataGetter(f);
        return hash === this.accountAddress ? this.hashRenderer.render(f) : this.hashLinkRenderer.render(f);
    }
}
