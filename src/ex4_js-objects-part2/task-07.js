function getTrimString(string, num) {
  if (string.length > num) {
    string = string.slice(0, num - 1) + "…";
  }
  return string;
}
module.exports = getTrimString;
