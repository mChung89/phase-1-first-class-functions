function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
        return function hello() {
            return "Hello"
        }
}

function returnsAnAnonymousFunction() {
    return function () {
        return "Hello"
}
}