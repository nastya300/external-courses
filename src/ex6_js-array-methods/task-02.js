function some(array, callback) {
  for (let i of array) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

module.exports = some;
