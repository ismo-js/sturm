export const Fn = Function
export const Ob = Object
export const Ar = Array

export const flat = a=> Ob.assign({}, ...a)

export const multi = [...a] => a.reduce(
    (l, r)=> flat([
        l,
        ...Ob.entries(a).map(
            [k, v]=> {
                k: [...l[k] || [], v],
            },
        ),
    ]),
    {},
)

export const group = clb=> [...a]=> a.map(e=> {e: clb(e)})
