const calculatorObj = {
  state: 0,
  parameterCheck(a) {
    return !(typeof a === "undefined");
  },
  getResult() {
    //получение текущего состояния (результат пред операции)
    return calculatorObj.state;
  },
  reset() {
    //сброс текущего состояния
    calculatorObj.state = 0;
  },
  add(a) {
    if (calculatorObj.parameterCheck(a)) {
      calculatorObj.state = calculatorObj.state + a;
    }
    return calculatorObj.add;
  },

  substract(a) {
    if (calculatorObj.parameterCheck(a)) {
      calculatorObj.state = calculatorObj.state - a;
    }
    return calculatorObj.substract;
  },
  devide(a) {
    if (calculatorObj.parameterCheck(a)) {
      calculatorObj.state = calculatorObj.state / a;
    }
    return calculatorObj.devide;
  },

  multiply(a) {
    if (calculatorObj.parameterCheck(a)) {
      calculatorObj.state = calculatorObj.state * a;
    } else {
      calculatorObj.state = calculatorObj.reset();
    }
    return calculatorObj.multiply();
  },
};

function Calculator() {
  return calculatorObj;
}
const calculator = Calculator();
module.exports = calculator;
