function getRandomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

module.exports = getRandomInteger;

