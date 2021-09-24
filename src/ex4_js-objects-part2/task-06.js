function getStrUppercaseCharacterEachWord(string) {
  string = string.split(" ");
  for (let i = 0; i < string.length; i += 1) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  return string.join(" ");
}
module.exports = getStrUppercaseCharacterEachWord;
