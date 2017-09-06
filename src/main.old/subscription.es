class Fun extends Fn {
    constructor(fun) {
        return Object.setPrototypeOf(fun, new.target.prototype)
    }
}

export class Subscription extends Fun {
    constructor() {

    }
}
