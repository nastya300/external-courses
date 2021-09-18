function hasProperty(propertyName, object) {
  if (propertyName in object) {
    return true;
  } else {
    return false;
  }
}
module.exports = hasProperty;
