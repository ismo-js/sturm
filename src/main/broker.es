export class Broker {
    async map(clb, clbArgs = []) {
        for await (let e of subscrs) {
            const fn =
                  "function" === typeof clb
                ? e::clb
                : e[valueOf(clb)]
            fn(...clbArgs)
        }
    }
}
