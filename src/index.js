module.exports = function reverse (n) {
  let changedInt = n
  let suppInt = 0
  let helpingInt
  while (changedInt) {
    helpingInt = changedInt % 10
    suppInt = suppInt * 10 + helpingInt
    changedInt = Math.floor(changedInt / 10)
  }
  return suppInt
}
