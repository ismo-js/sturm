export class Observable extends Broker {
    static NXT = "next"
    static ERR = "error"
    static LEN = "complete"

    subscrs = []
    src = void 0

    static of(...a) {
        return Observable.from(a)
    }

    static from(a) {
        return new Observable().chain(a)
    }

    constructor(src) {
        Ob.assign(this, {src})
    }

    chain(a) {
        
    }

    subscribe(observer) {
        this.src(this)
    }

    next = val=> this.send(NXT, [val])
    error = err=> this.send(ERR, [err])
    complete = ()=> this.send(LEN)
}
