function outputAndCountArrayElements(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }
  console.log(array.length);
  return;
}
module.exports = outputAndCountArrayElements;
