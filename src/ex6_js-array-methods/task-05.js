function map(array, callback) {
  let clone = [];
  for (let i = 0; i < array.length; i+=1) {
    clone.push(callback(array[i],i,array));
  }
  return clone;
}

module.exports = map;
