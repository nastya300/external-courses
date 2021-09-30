function cloneObject(obj) {
  const newObj = Object.assign({}, obj);

  return newObj;
}

module.exports = cloneObject;
