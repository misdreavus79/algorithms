function change(amount) {
  // base case
  if (amount < 8) {
    return [];
  }
  if (amount === 8) {
    return [3, 5];
  }
  if (amount === 9) {
    return [3, 3, 3];
  }
  if (amount === 10) {
    return [5, 5];
  }
  let coins = change(amount - 3);
  coins.push(3);
  return coins;
}
