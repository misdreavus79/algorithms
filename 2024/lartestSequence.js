function largestSequence(number) {
  const array = number.toString().split("");
  let index = 0,
    accumulator = 0;
  const tracker = new Map();

  while (array.length > 1) {
    if (!tracker.has(array[index])) {
      accumulator++;
      index++;
      tracker.set(array[index], index);
    } else {
      array.shift();
      index = 0;
      accumulator = 0;
    }
  }
}
