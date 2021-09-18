function printKeysAndValuesObject(obj) {
  for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
  }
  return;
}
module.exports = printKeysAndValuesObject;
