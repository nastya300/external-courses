function getStrUppercaseCharacterEachWord(string) {
  let res = string.split(" ");
  for (let i = 0; i < res.length; i += 1) {
    res[i] = res[i].charAt(0).toUpperCase() + res[i].substring(1);
  }
  return res.join(" ");
}
module.exports = getStrUppercaseCharacterEachWord;
