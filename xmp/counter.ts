type Stamp = number
type Ms = number

type Kind<
      Elem> =
    {[key :number /*Stamp*/]: Elem}

interface State<Elem> {
    stamp :Stamp,
    time :Ms,
    elem :Elem,
}

type Father<Elem> = new(
    state :State<Elem>,
)=> KindLike<Elem>

type KindLike<Elem> =
    Kind<Elem> | Iterable<Elem>
type KindProd<Elem> =
    Father<Elem> | KindLike<Elem>

class Stm {
    static kind<
          Elem>(
    ): Function {
        return function <
              Target extends KindProd<Elem>>(
            target :Target
        ) {
            return class extends Stm {}
        }
    }
}

@Stm.kind<number>()
class X {

}
