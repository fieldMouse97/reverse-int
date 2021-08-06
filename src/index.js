function reverse (anyInt) {
  let changedInt = anyInt
  let suppInt = 0
  let helpingInt
  while (changedInt) {
    helpingInt = changedInt % 10
    suppInt = suppInt * 10 + helpingInt
    changedInt = changedInt / 10 | 0
  }
  return suppInt
}
