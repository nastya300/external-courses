function slice(array, start, end) {
  let clone = [];
  if (start < 0) {
    start = array.length + start;
    if (start < 0) {
      start = 0;
    }
  }
  if (end < 0) {
    end = array.length + end;
  }
  if (end > array.length) {
    end = array.length;
  }

  if (arguments.length === 3) {
    for (let i = start; i < end; i += 1) {
      clone.push(array[i]);
    }
  } else if (arguments.length === 2) {
    for (let i = start; i < array.length; i += 1) {
      clone.push(array[i]);
    }
  } else {
    for (let i = 0; i < array.length; i += 1) {
      clone.push(array[i]);
    }
  }
  return clone;
}

module.exports = slice;
