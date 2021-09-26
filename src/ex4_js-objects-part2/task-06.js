function getStrUppercaseCharacterEachWord(string) {
  let res;
  string = string.split(" ");
  for (let i = 0; i < string.length; i += 1) {
    res[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  return res.join(" ");
}
module.exports = getStrUppercaseCharacterEachWord;
