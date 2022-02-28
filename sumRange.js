function range(start, end, step = 1) {
  let resultArr = [];

  if (start > end) {
    if (step > 0) step *= -1;
    while (start >= end) {
      resultArr.push(start);
      start += step;
    }
  } else {
    while (start <= end) {
      resultArr.push(start);
      start += step;
    }
  }

  return resultArr;
}

function sum(numbers) {
  let sum = 0;
  if (Array.isArray(numbers)) {
    for (let number of numbers) {
      if (typeof number === "number") sum += number;
    }
  }

  return sum;
}

console.log(range(1, 10)); // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1)); // → [5, 4, 3, 2]
console.log(sum(range(1, 10))); // → 55
console.log(range(5, 2)); // → [5, 4, 3, 2]
