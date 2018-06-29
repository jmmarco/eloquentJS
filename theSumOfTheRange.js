function range(start, end, step) {
  let result = [];

  if (start < end) {
    let num = start;
    while (num <= end) {
      result.push(num);
      if (step === undefined) num++;
      else {
        num += step;
      }
    }
  } else {
    console.log(start, end);
    let num = start;
    while (num >= end) {
      num += step;

      if (num == end) {
        result.push(num);
        break;
      }
    }
  }

  return result;
}

function sum(arr) {
  let result = 0;
  for (let num of arr) {
    result += num;
  }
  return result;
}

// let myNumbers = range(5, 2, -1)
let myNumbers = range(1, 10);

let mySum = sum(myNumbers);

console.log(myNumbers);
