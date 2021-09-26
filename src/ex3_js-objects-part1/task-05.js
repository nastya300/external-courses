function cloneObject(obj) {
  let newObj = {};
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    newObj[i] = obj[i];
  }
  return newObj;
}

module.exports = cloneObject;
