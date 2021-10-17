const calculatorObj = {
  state: 0,
  parameterCheck(a) {
    return !(typeof a === "undefined");
  },
  getResult() {
    return calculatorObj.state;
  },
  reset() {
    calculatorObj.state = 0;
  },
  add(a) {
    if (calculatorObj.parameterCheck(a)) {
      calculatorObj.state = calculatorObj.state + a;
    }

    return calculatorObj.add;
  },
  subtract(a) {
    if (calculatorObj.parameterCheck(a)) {
      calculatorObj.state = calculatorObj.state - a;
    }
    return calculatorObj.subtract;
  },
  divide(a) {
    if (calculatorObj.parameterCheck(a)) {
      calculatorObj.state = calculatorObj.state / a;
    }
    return calculatorObj.divide;
  },

  multiply(a) {
    if (calculatorObj.parameterCheck(a)) {
      calculatorObj.state = calculatorObj.state * a;
    }
    return calculatorObj.multiply;
  },
};
function Calculator() {
  return calculatorObj;
}
const calculator = Calculator();

module.exports = calculator;
