function solution(n) {
  var answer = 0;
  let a = Math.sqrt(n);

  if (!Number.isInteger(a)) return -1;
  else return Math.pow(a + 1, 2)
}