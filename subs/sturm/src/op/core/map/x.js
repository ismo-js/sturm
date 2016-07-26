import ac from "accessies"

export default class X {
  constructor(meta$) {
    ac.g(this, {meta$})
  }

  async *[Symbol.iterator]() {
    await this.scan(this.meta$, async (a$, f$)=> {
      //TODO scan f$, a$ at the same time
    }, [e=> e])
  }

  async scan(o$, f, seed) {
    let res = seed
    for (let e$ of o$) {
      const e = await e$
      NIL !== e && res = await f(e, res)
    }
  }
}
