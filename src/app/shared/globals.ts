import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
    public candData;
    setCandValues(candData) {
        this.candData = candData;
    }
    getCandValues() {
        return this.candData;
    }
}