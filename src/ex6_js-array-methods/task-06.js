function reduce(array, callback, initialValue) {
  let startIndex = 1;
  let previousValue = array[0];

  if (initialValue) {
    previousValue = initialValue;
    startIndex = 0;
  }
  for (let i = startIndex; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = reduce;
