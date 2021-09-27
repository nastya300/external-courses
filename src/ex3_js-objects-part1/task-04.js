function newKey(propertyName, obj) {
  const objCopy = { ...obj };
  if (!obj.hasOwnProperty(propertyName)) {
    objCopy[propertyName] = "new";
  }

  return objCopy;
}

module.exports = newKey;