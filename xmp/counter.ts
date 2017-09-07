type Ms = number

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

}

class Meta {
    static kind<Elem>() {
        return function <
              Target extends Father<Elem>>(
            target :Target,
        ) {
            return target
        }
    }
}

@Meta.kind<number>()
class X extends Kind<number> {
    [0] = [1,4,7]
}
