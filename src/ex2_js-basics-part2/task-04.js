function isIdenticalArrayElements(array) {
  let firstElementsArray = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (firstElementsArray !== array[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isIdenticalArrayElements;

