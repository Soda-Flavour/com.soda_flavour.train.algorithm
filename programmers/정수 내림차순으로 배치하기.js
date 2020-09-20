function solution(n) {
  var answer = 0;
  return parseInt((n + '').split('').sort((a, b) => b - a).join(''));
}