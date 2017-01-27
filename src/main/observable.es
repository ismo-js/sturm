export class Observable {
    static chain(a, b) {

    }

    constructor(src) {

    }

    function of(...a) {
        const res =
              new.target //"called using `new`?"
            ? new Observable(a)
            : new Observable(this).chain(a)
        return res
    }
}
