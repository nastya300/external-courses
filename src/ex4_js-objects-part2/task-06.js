function getStrUppercaseCharacterEachWord(string) {
  let resultString;
  string = string.split(" ");
  for (let i = 0; i < string.length; i += 1) {
    resultString[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  return resultString.join(" ");
}
module.exports = getStrUppercaseCharacterEachWord;
