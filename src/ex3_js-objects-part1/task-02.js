function printKeysAndValuesObject(obj) {
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i += 1) {
    console.log(keys[i], obj[keys[i]]);
  }

  return;
}

module.exports = printKeysAndValuesObject;
