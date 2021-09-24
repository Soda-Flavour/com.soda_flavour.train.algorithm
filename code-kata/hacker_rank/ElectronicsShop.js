function getMoneySpent(keyboards, drives, b) {
  let max = -1;
  for (let keyboard of keyboards) {
    for (let drive of drives) {
      if (b >= keyboard + drive) {
        if (max < keyboard + drive) {
          max = keyboard + drive;
        }
      }
    }
  }
  return max;
}
