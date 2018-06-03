
for (let i = 1; i <= 8; i++) {
  var line  = ''
  if (i % 2 == 0) {
    for (let j = 1; j <= 8; j++) {
      if (j % 2 == 0)
        line += '#'
      else
        line += ' '
    }
  } else {
      for (let j = 1; j <= 8; j++) {
        if (j % 2 == 0)
          line += ' '
        else
          line += '#'
      }
  }

  console.log(line)
}