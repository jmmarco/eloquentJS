function reverseArrayInPlace(array) {
  if (Array.isArray(array)) {
    const middle = Math.round(array.length / 2) - 1;
    for (let i = 0; i < middle; i++) {
      // Grab the first and last element as we go
      const first = array[i];
      const last = array[array.length - 1 - i];

      // replace the first position with the last value and vice versa
      array[i] = last;
      array[array.length - 1 - i] = first;
    }
  }
  return array;
}

console.log(
  reverseArrayInPlace([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ])
);
console.log(reverseArrayInPlace(["Bowie", "Gisela", "Felix"]));
