function divisibleByTwoOrThree(number) {
  let counter = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      counter++;
    }
  }
  return counter;
}

function notDivisibleByTwoAndThree(number) {
  let counter = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      counter++;
    }
  }
  return counter;
}
