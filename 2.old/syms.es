const Ob = Object
const merge = a=> Ob.assign({}, ...a)

const symTexts = {
    meta: {
        IDX: "Index of the event",
        LEN: "Length of the stream",
        KEY: "Key of the event",
        PRE: "Previous event",
        NXT: "Next event in the stream",
    },
    value: {
        ERR: "Current problem/error",
        RAW: "Numeric value",
        STR: "String value",
        FUN: "Function"
    },
}
const symTextsFlat = merge(Ob.entries(symTexts).map([k, v]=> v))
const syms = exports = merge(
    Ob.entries(symTextsFlat)
          .map([k, v]=> {[k]: Symbol(k + " = " + v)})
)
