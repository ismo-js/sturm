export * from "syms"

const Ob = Object
const merge = a=> Ob.assign({}, ...a)

class Sturm extends Prm {
    static adapt(a, b) {

    }

    constructor(a) {

    }
}

function sturm(...a) {
    const res =
          new.target
        ? new Sturm(a)
        : Sturm.adapt(this, a)
    return res
}
