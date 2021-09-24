function getValueProperty(nameProperty, obj) {
  if (!(nameProperty in Object.getPrototypeOf(obj))) {
    return;
  }
  return obj[nameProperty];
}
module.exports = getValueProperty;
