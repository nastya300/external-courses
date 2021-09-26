function printKeysAndValuesObject(obj) {
  for (let key of Object.keys(obj)) {
    console.log(key, obj[key]);
  }
  return;
}

module.exports = printKeysAndValuesObject;
