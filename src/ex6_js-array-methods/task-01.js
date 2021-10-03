function slice(array, start, end) {
  let newStart = start;
  let NewEnd = end;
  let clone = [];

  if (newStart < 0) {
    newStart = array.length + newStart;
    if (newStart < 0) {
      newStart = 0;
    }
  }
  if (NewEnd < 0) {
    NewEnd = array.length + NewEnd;
  }
  if (NewEnd > array.length) {
    NewEnd = NewEnd.length;
  }

  if (arguments.length === 3) {
    for (let i = newStart; i < NewEnd; i += 1) {
      clone.push(array[i]);
    }
  } else if (arguments.length === 2) {
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
