declare type Stamp = number;
declare type Ms = number;
declare type Kind<Elem> = {
    [key: number]: Elem;
};
interface State<Elem> {
    stamp: Stamp;
    time: Ms;
    elem: Elem;
}
declare type Father<Elem> = new (state: State<Elem>) => KindLike<Elem>;
declare type KindLike<Elem> = Kind<Elem> | Iterable<Elem>;
declare type KindProd<Elem> = Father<Elem> | KindLike<Elem>;
declare class Stm {
    static kind<Elem>(): Function;
}
declare class X {
}
