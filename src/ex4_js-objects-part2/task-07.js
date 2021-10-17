function getTrimString(string, num) {
  let resultString;
  if (string.length > num) {
    resultString = string.slice(0, num - 1) + "…";
  }
  return resultString;
}

module.exports = getTrimString;

