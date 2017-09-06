export * from "syms"

export function Sturm(a) {
    return
          new.target
        ? Observable.from(a)
        : {[FUN]: Observable.from(a)}
}

export const $ = Sturm
