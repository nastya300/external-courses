function insertString(string, insertStr, index) {
 let strResult =
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
  return strResult;
}

module.exports = insertString;

