type Ms = number
type O = Object
const O = Object
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

class Stm<Elem> {
    constructor() {
        return new Px(this, new StmHand<Elem>())
    }

    byStamp(i :number) {

    }
}

class StmHand<Elem> implements ProxyHandler<Stm<Elem>> {
    get(
        tgt :Stm<Elem>,
        prop :string
    ) :any {
        function inProto<Tgt>(
            tgt :Tgt,
            prop :string,
        ): prop is keyof Tgt {
            const proto = O.getPrototypeOf(tgt)
            return prop in proto
        }

        const i :number = parseInt(prop)
        const isI :boolean = Number.isSaveInteger(i)

        if (isI) {
            return tgt.byStamp(i)
        } else if (inProto(tgt, prop)) {
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
            return new Stm<Elem>()
            //…TODO! Is just Hack!
        }
    }
}

@Meta.kind<number>()
class X extends Kind<number> {
    [0] = [1, 4, 7]
}
