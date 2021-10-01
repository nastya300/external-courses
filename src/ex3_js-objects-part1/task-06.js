function deepCloneObject(obj) {
  let clone;
  if (!Array.isArray(obj)) {
    clone = Object.assign({}, obj);
    Object.keys(clone).forEach(function check(key) {
      if (typeof obj[key] === "object") {
        clone[key] = deepCloneObject(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    });
  } else {
    if (obj.length) {
      clone = Object.assign([], obj);
      clone.length = obj.length;
      for (let i = 0; i < obj.length; i += 1) {
        if (typeof obj[i] === "object") {
          clone[i] = deepCloneObject(obj[i]);
        }
      }
      return clone;
    } else {
      return obj;
    }
  }
  return clone;
}

module.exports = deepCloneObject;
