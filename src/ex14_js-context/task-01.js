const Calculator = {
    state: 0,
    parameterCheck(a) {
        return !(typeof a === "undefined");
    },

    setState(a) {
        this.state = a;
    },

    getResult() {
        return this.state;
    },
    reset() {
        this.state = 0;
        return this;
    },
    add(a) {
        if (this.parameterCheck(a)) {
            this.state = this.state + a;
        }
        return this;
    },
    subtract(a) {
        if (this.parameterCheck(a)) {
            this.state = this.state - a;
        }
        return this;
    },
    divide(a) {
        if (this.parameterCheck(a)) {
            this.state = this.state / a;
        }
        return this;
    },

    multiply(a) {
        if (this.parameterCheck(a)) {
            this.state = this.state * a;
        }
        return this;
    },

    fetchData(callback) {
        setTimeout(callback, 10000)
    },

    callback() {
        Calculator.setState(500);
    }
};

module.exports=Calculator;
