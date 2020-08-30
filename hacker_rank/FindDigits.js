function findDigits(n) {
  let cnt = 0;
  let divideArr = n.toString().split('');
  while (divideArr.length > 0) {
    let divider = divideArr.shift();
    if (n % divider == 0) cnt++;
  }
  return cnt;
}
