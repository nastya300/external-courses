function countEachCharacterString(str) {
  let map = {};
  for (let i = 0; i < str.length; i += 1) {
    if (map.hasOwnProperty(str[i])) {
      map[str[i]] += 1;
    } else {
      map[str[i]] = 1;
    }
  }
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i += 1) {
    console.log(keys[i], map[keys[i]]);
  }
}

module.exports = countEachCharacterString;
