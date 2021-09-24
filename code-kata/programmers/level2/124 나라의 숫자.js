function solution(n) {
  var answer = '';
  let val = n;
  while (val > 0) {
    if (val % 3 === 0) {
      answer = '4' + answer;
      val = Math.floor(val / 3) - 1
    } else if (val % 3 === 1) {
      answer = '1' + answer;
      val = Math.floor(val / 3)
    } else if (val % 3 === 2) {
      answer = '2' + answer;
      val = Math.floor(val / 3);
    }

  }
  return answer;
}