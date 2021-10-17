function slice(array, start, end) {
  let newStart = start;
  let newEnd = end;
  let clone = [];

  if (newStart < 0) {
    newStart = array.length + newStart;
    if (newStart < 0) {
      newStart = 0;
    }
  }
  if (newEnd < 0) {
    newEnd = array.length + newEnd;
  }
  if (newEnd > array.length) {
    newEnd = array.length;
  }

  if (end || end === 0) {
    for (let i = newStart; i < newEnd; i += 1) {
      clone.push(array[i]);
    }
  } else if (start || start === 0) {
    for (let i = newStart; i < array.length; i += 1) {
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
