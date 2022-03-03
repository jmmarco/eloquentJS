function loop(value, testFn, updateFn, bodyFn) {
  for (let i = value; i >= 0; i--) {
    if (!testFn(i)) {
      return false;
    }
    bodyFn(i);
    updateFn(i);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
