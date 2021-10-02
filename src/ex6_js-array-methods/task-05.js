function map(array, callback) {
  let clone = [];
  for (let i = 0; i < array.length; i++) {
    clone.push(callback(array[i]));
  }
  return clone;
}

module.exports = map;
