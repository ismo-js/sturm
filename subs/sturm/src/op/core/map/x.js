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
        async [f, a]=> void 0, //TODO
        void 0, //TODO
      ),
      [e=> e],
    )
  }

  async multiscan(o$s, f, seed) {
    const multinext_ = ()=> o$s.map(o$=> o$.next())
    const hasEnd = es=> -1 < es.indexOf(END)

    for (
      let es, res = seed;
      hasEnd(es = multinext_()); //TODO stop when ALL end, not when ONE ends.
      res = await f(es, res) //TODO concurrency instead of pairing together.
    );
  }
}
