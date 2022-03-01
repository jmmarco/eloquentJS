function arrayToList(array) {
  let list = {}

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list}
    if (array[i] === array[array.length - 1]) {
      list = { value: array[i], rest: null}
    }
  }

  return list
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}




// console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));