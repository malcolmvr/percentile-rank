const percentRank = (arr, value) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        return i / (arr.length - 1);
    }
  }

  // calculate value using linear interpolation
  let x1, x2, y1, y2;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < value && value < arr[i + 1]) {
      x1 = arr[i];
      x2 = arr[i + 1];
      y1 = percentRank(arr, x1);
      y2 = percentRank(arr, x2);
      return (((x2 - value) * y1 + (value - x1) * y2)) / (x2 - x1);
    }
  }

  throw new Error('Out of bounds');
};

module.exports = percentRank;
