function deepCloneObject(obj) {
  const clone = Object.assign({}, obj);

  Object.keys(clone).forEach(function check(key) {
    if (typeof obj[key] === "object") {
      clone[key] = deepCloneObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  });

  if (Array.isArray(obj)) {
    if (obj.length) {
      clone.length = obj.length;
      return Array.from(clone);
    } else {

      return Array.from(obj);
    }
  } else {

    return clone;
  }
}

module.exports = deepCloneObject;