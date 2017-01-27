export * from "syms"

export class Sturm extends Prm {
    static chain(a, b) {

    }

    constructor(a) {

    }
}

function sturm(...a) {
    const res =
          new.target //"called using `new`?"
        ? new Sturm(a)
        : new Sturm(this).chain(a)
    return res
}
