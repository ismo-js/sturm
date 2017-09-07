type Type<
      Key extends string,
      Elem> =
    {[key in Key]: Elem} & {[key :number]: Elem}

type Typer = new(
    tl? :any[]
)=> {}
type TypeLike<
      Key extends string,
      Elem> =
    Typer | Type<Key, Elem>

class Stream {
    static proto<
          Key extends string,
          Elem>(
    ): Function {
        return function <
              Target extends TypeLike<Key, Elem>>(
            target :Target,
        ) {
            return class extends Stream {}
        }
    }
}

@Stream.proto<string, number>()
class X {

}
