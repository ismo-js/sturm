export * from "syms"

export function Sturm(...a) {
    const aFrom = Observable.from(a)

    return
          new.target
        ? aFrom
        : Observable.from(this).chain(aFrom)
}

export const $ = Sturm
