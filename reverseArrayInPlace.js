function reverseArrayInPlace(arr) {

  // Divide the array
  let lengthOfArr = arr.length / 2

  for (var i = 0; i < lengthOfArr; i++) {
    // Grab the first and last element as we go
    let first = arr[i]
    let last = arr[arr.length - 1 - i]

    // replace the first position with the last value and vice versa
    arr[i] = last
    arr[arr.length - 1 -i ] = first

  }

  return arr
}

// console.log(reverseArrayInPlace( ["Bowie", "Gisela", "Juan"]) )
console.log(reverseArrayInPlace( [1,2,3,4,5]) )
// console.log(reverseArrayInPlace( ["Bowie", "Gisela"]) )