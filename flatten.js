const arrays = [[1, 2, 3], [4, 5], [6]];

const result = arrays.reduce((acc, value) => {
  return acc.concat(value)
}, [])

console.log('result', result)