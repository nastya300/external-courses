function numberOrString(x) {
  if (typeof x === "number") {
    return "number";
  } else if (typeof x === "string") {
    return "string";
  } else if (isNaN(x)) {
    return undefined;
  } else return undefined;
}
module.exports = numberOrString;
