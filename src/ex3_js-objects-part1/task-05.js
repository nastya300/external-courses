function cloneObject(obj) {
  let newObj = {};
  for (let key of Object.keys(obj)) {
    newObj[key] = obj[key];
  }
  return newObj;
}

module.exports = cloneObject;

