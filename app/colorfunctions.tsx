const hexDigits = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
] //.reverse()

export const greenRed = (limit = 16 * 16) => {
  const colors = []
  let count = 0

  for (let g of hexDigits) {
    for (let r of hexDigits) {
      const color = `#${r}${g}${0}`
      colors.push(color)
      if (++count >= limit) return colors
    }
  }
  return colors
}

export const greenBlue = (limit = 16 * 16) => {
  const colors = []
  let count = 0

  for (let g of hexDigits) {
    for (let b of hexDigits) {
      const color = `#${0}${g}${b}`
      colors.push(color)
      if (++count >= limit) return colors
    }
  }
  return colors
}
export const blueRed = (limit = 16 * 16) => {
  const colors = []
  let count = 0

  for (let b of hexDigits) {
    for (let r of hexDigits) {
      const color = `#${r}${0}${b}`
      colors.push(color)
      if (++count >= limit) return colors
    }
  }
  return colors
}
