function filter(array, callback) {
  let clone = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      clone.push(array[i]);
    }
  }
  return clone;
}

module.exports = filter;
