type Ms = number
type Ob = Object
const Ob = Object
const Px = Proxy

abstract class Kind<Elem> {
    [key :number /*Stamp*/]: Elem[]
}

interface KindInf<Elem> extends Kind<Elem> {}

interface State<Elem> {
    time :Ms,
    elem :Elem,
}

type Father<Elem> = new(
    state? :State<Elem>,
)=> KindLike<Elem>

type KindLike<Elem> =
    KindInf<Elem> | Iterator<Elem>
type KindProd<Elem> =
    Father<Elem> | KindLike<Elem>

class Stm {
    constructor() {
        return new Px(this, new StmHand())
    }

    byStamp(i :number) {

    }
}

class StmHand implements ProxyHandler<Stm> {
    get(
        tgt :Stm,
        prop :string
    ) {
        const i :number = parseInt(prop)
        const isI :boolean = Number.isSaveInteger(i)

        if (isI) {
            return tgt.byStamp(i)
        } else {
            return tgt[prop]
        }
    }
}

class Meta {
    static kind<Elem>() {
        return function <
              Target extends Father<Elem>>(
            tgt :Target,
        ) {
            return new Stm() as Target
            //…TODO! Is just Hack!
        }
    }
}

@Meta.kind<number>()
class X extends Kind<number> {
    [0] = [1, 4, 7]
}
