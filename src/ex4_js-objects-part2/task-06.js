function getStrUppercaseCharacterEachWord(string) {
  let resultString = string.split(" ");
  for (let i = 0; i < resultString.length; i += 1) {
    resultString[i] =
      resultString[i].charAt(0).toUpperCase() + resultString[i].substring(1);
  }
  return resultString.join(" ");
}
module.exports = getStrUppercaseCharacterEachWord;
