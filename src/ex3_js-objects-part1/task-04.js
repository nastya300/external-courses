function newKey(propertyName, obj) {
  let objCopy = {};
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    objCopy[key] = obj[key];
  }
  if (!obj.hasOwnProperty(propertyName)) {
    objCopy[propertyName] = "new";
  }
  return objCopy;
}

module.exports = newKey;
