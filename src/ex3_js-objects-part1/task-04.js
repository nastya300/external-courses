function newKey(propertyName, obj) {
  let objCopy = {};
  for (let key of Object.keys(obj)) {
    objCopy[key] = obj[key];
  }
  if (!obj.hasOwnProperty(propertyName)) {
    objCopy[propertyName] = "new";
  }
  return objCopy;
}

module.exports = newKey;
