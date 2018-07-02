function reverseArray (arr) {

  // Create empty array
  let resultArr = []

  // Iterate backwards
  for (let i = arr.length - 1; i >= 0 ; i--) {
    // append each value to the new array
    resultArr.push(arr[i])
  }

  return resultArr
}

console.log(reverseArray( [1,2,3,4,5]) )