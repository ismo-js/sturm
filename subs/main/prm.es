class Prm {
    static cat(err) {
        throw err
    }

    async then(clb, cat = Prm.cat) {
        const prm =
              clb
            ? Promise.race(this[LEN], this[ERR])
            : this[ERR]
        await prm

        const err = this.state[ERR]
        return err ? cat(err) : clb(this.state)
    }

    catch(cat) {
        return this.then(void 0, cat)
    }
}
