function newKey(propertyName, obj) {
  let objCopy = {};
  Object.assign(objCopy, obj);
  if (!(propertyName in obj)) {
    objCopy.propertyName = "new";
  }
  return objCopy;
}
module.exports = newKey;
