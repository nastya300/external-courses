function hasProperty(propertyName, object) {
  if (object.hasOwnProperty(propertyName)) {
    return true;
  } else {
    return false;
  }
}
module.exports = hasProperty;
