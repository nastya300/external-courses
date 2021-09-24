function getStringLowerCamelCase(str) {
  str = str.split(" ");
  str[0] = str[0].toLowerCase();
  for (let i = 1; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  return str.join("");
}
