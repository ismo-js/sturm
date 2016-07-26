import ac from "accessies"

export default class X {
  constructor(sbj$$) {
    ac.g(this, {sbj$$})
  }

  async *[Symbol.iterator]() {
    await this.multiscan(
      [this.sbj$$],
      async ([a$], f$)=> await this.multiscan(
        [f$, a$],
        async ([f, a], l)=> [...l, f(a)],
        [],
      ),
      [e=> e],
    )
  }

  async multiscan(o$s, f, seed) {
    const multinext_ = ()=> o$s.map(o$=> o$.next())
    const allEnded = es=> es.every(e=> END === e)

    for (
      let es, res = seed;
      allEnded(es = multinext_());
      res = await f(es, res) //TODO concurrency instead of pairing together.
    );
  }
}
