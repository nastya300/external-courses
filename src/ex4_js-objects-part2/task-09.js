function insertStr(string, insertStr, index) {
  string =
    string
      .split(" ")
      .slice(0, index + 1)
      .join(" ") +
    " " +
    insertStr +
    " " +
    string
      .split(" ")
      .slice(index + 1)
      .join(" ");
  return string;
}
module.exports = insertStr;
