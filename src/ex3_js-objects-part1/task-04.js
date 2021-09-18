function newKey(propertyName, obj) {
  let objCopy = {};
  Object.assign(objCopy, obj);
  if (!obj.hasOwnProperty(propertyName)) {
    objCopy.propertyName = "new";
  }
  return objCopy;
}
module.exports = newKey;
