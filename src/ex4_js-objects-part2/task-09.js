function insertStr(str, insertStr, index) {
  str =
    str
      .split(" ")
      .slice(0, index + 1)
      .join(" ") +
    " " +
    insertStr +
    " " +
    str
      .split(" ")
      .slice(index + 1)
      .join(" ");
  return str;
}
module.exports = insertStr;
