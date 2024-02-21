// Replicate "range" from Python
const range = (n) => [...Array(n).keys()];

function canBeExtended(perm) {
  const i = perm.length - 1;
  for (const j of range(i)) {
    if (i - j === Math.abs(perm[i] - perm[j])) {
      return false;
    }
  }
  return true;
}

let solutions = 0;

function extend(perm, n) {
  // If we're at the last element, return all permutations

  if (perm.length === n) {
    console.log(perm);
    solutions += 1;
    console.log(solutions);
  }

  for (const k of range(n)) {
    if (!perm.includes(k)) {
      perm.push(k);
      if (canBeExtended(perm)) {
        extend(perm, n);
      }
      perm.pop();
    }
  }
}

extend([], 8, 0);
