
let size = 10;

for (let i = 1; i <= size; i++) {
  var line  = ''
  if (i % 2 == 0) {
    for (let j = 1; j <= size; j++) {
      if (j % 2 == 0)
        line += '#'
      else
        line += ' '
    }
  } else {
      for (let j = 1; j <= size; j++) {
        if (j % 2 == 0)
          line += ' '
        else
          line += '#'
      }
  }

  console.log(line)
}