import ac from "accessies"

export default class X {
  constructor(meta$) {
    ac.g(this, {meta$})
  }

  async *[Symbol.iterator]() {
    await this.multiscan([this.meta$], async ([a$], f$)=> {
      void 0
    }, [e=> e])
  }

  async multiscan(o$s, f, seed) {
    const multinext_ = ()=> o$s.map(o$=> o$.next())
    const hasEnd = es=> -1 < es.indexOf(END)

    for (
      let es, res = seed;
      hasEnd(es = multinext_());
      res = await f(es, res)
    );
  }
}
