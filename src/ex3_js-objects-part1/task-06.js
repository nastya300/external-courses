function deepCloneObject(obj) {
  for (let key in obj) {
    if (obj === null) {
      return null;
    }
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(function check(key) {
      if (typeof obj[key] === "object") {
        clone[key] = deepClone(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    });
  }
}

module.exports = deepCloneObject; 
