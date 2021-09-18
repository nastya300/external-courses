function isSimpleNumber(number) {
  let result;
  let flag = true;
  if (number === 0 || number === 1) {
    flag = false;
    result = "Не причисляется ни к простым, ни к составным числам";
  }
  if (number < 1000) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        flag = false;
        result = `Число ${number} - составное число`;
        break;
      }
    }
    if (flag) {
      result = `Число ${number} - простое число`;
    }
  } else {
    result = "Данные неверны";
  }
  return result;
}
module.exports = isSimpleNumber;
