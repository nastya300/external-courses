function countEachCharacterString(str) {
  let map = {};
  for (let i = 0; i < str.length; i += 1) {
    if (map.hasOwnProperty(str[i])) {
      map[str[i]] += 1;
    } else {
      map[str[i]] = 1;
    }
  }
  for (let key of Object.keys(map)) {
    console.log(key, map[key]);
  }
}

module.exports = countEachCharacterString;
