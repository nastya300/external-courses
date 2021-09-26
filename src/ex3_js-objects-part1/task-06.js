function deepCloneObject(obj) {
  let clone = Object.assign({}, obj);

  if (obj === null) {
    return null;
  }

  Object.keys(clone).forEach(function check(key) {
    if (typeof obj[key] === "object") {
      clone[key] = deepCloneObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  });
  if (Array.isArray(obj) && obj.length) {
    clone.length = obj.length;
    Array.from(clone);
  } else {
    Array.from(obj);
  }

  return clone;
}

module.exports = deepCloneObject;
