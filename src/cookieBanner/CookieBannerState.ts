import { observable } from "mobx";
import { IStorage } from "../util/storage/IStorage";

export class CookieBannerState {
    @observable
    private _cookiesAccepted: boolean;

    constructor(private storage: IStorage, private storageKey = "cookiesConsent") {
        let storedData = storage.getItem(this.storageKey) || "false";
        this._cookiesAccepted = ["true", "1", "on"].indexOf(storedData) !== -1;
    }

    get cookiesAccepted() {
        return this._cookiesAccepted;
    }

    set cookiesAccepted(v: boolean) {
        this.storage.setItem(this.storageKey, v ? "true" : "false");
        this._cookiesAccepted = v;
    }
}
