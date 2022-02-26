function isEven(n) {
  if(n % 2 !== 0 && n > 0) {
    return isEven(n * -1)
  }
  
  return n % 2 === 0 ? true : false
}

console.log(isEven(-6));