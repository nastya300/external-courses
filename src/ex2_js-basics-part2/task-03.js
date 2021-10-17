function printEvenAndOddElementsArray(inputArray) {
  let outputArray = [0, 0, 0];
  for (let i = 0; i < inputArray.length; i += 1) {
    let isRerult =
      inputArray[i] % 2 === 0 && inputArray[i] !== 0 && inputArray[i] !== null;
    if (isRerult) {
      outputArray[0] += 1;
    } else if (inputArray[i] % 2 !== 0) {
      outputArray[1] += 1;
    } else if (inputArray[i] === 0) {
      outputArray[2] += 1;
    }
  }
  return outputArray;
}

module.exports = printEvenAndOddElementsArray;
