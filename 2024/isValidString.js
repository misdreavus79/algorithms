function isValid(s) {
  const newString = s.replaceAll(/\(\)|\[\]|\{\}/g, "");

  if (newString.length % 2 !== 0) {
    return false;
  }

  if (newString.length === 0) {
    return true;
  }

  if (/\(\)|\[\]|\{\}/g.test(newString)) {
    return isValid(newString);
  }
  return false;
}

function isValidWithStack(str) {
  const openParens = /\(|\{|\[/;
  const closeParens = /\)|\}|\]/;
  const naturalPairs = /\(\)|\[\]|\{\}/;
  const arr = str.split("");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (openParens.test(arr[i])) {
      stack.push(arr[i]);
    }
    if (closeParens.test(arr[i])) {
      if (naturalPairs.test(`${stack[stack.length - 1]}${arr[i]}`)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
