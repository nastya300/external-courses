function getTrimString(string, num) {
  if (string.length > num) {
    resultString = string.slice(0, num - 1) + "…";
  }
  return resultString;
}
module.exports = getTrimString;
