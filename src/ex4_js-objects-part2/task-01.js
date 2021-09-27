function getValueProperty(nameProperty, obj) {
  if (!(nameProperty in Object.getPrototypeOf(obj))) {
    return undefined;
  }
  return obj[nameProperty];
}

module.exports = getValueProperty;

