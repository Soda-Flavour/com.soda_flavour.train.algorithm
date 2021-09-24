function beautifulDays(i, j, k) {
  let cnt = 0;
  let reverseNum = (num) => parseInt([...num.toString()].reverse().join(''));

  for (let a = i; a <= j; a++) {
    let num = (a - reverseNum(a)) / k;
    if (Number.isInteger(num)) cnt++;
  }
  return cnt;
}
