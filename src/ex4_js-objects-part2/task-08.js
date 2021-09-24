function getStringLowerCamelCase(string) {
  string = string.split(" ");
  string[0] = string[0].toLowerCase();
  for (let i = 1; i < string.length; i += 1) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  return string.join("");
}
module.exports = getStringLowerCamelCase;
