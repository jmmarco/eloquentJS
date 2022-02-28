function range(start, end, step = 1) {
  let resultArr = [],
    currentNumber = start;

  while (currentNumber <= end) {
    resultArr.push(currentNumber);
    currentNumber += step;
  }
  return resultArr;
}

// console.log(range(0, 10))
// console.log(range(5,7))

function sum(numbers) {
  let sum = 0;
  if (Array.isArray(numbers)) {
    for (let number of numbers) {
      if (typeof number === "number") sum += number;
    }
  }

  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
