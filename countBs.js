function countBs(str = "") {
  const targetStr = String(str);
  if (!targetStr) return 0;
  return countChar(targetStr, "B");
}

function countChar(str = "", char = "") {
  let found = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) found++;
  }
  return found;
}

console.log(countBs()); // -> 0
console.log(countBs("B")); // -> 1
console.log(countBs("BBC")); // -> 2
console.log(countChar("kakkerlak", "k")); // -> 4
