function solution(n) {
  return (n + '').split('').reduce((p, v) => parseInt(p, 10) + parseInt(v, 10), 0);

}