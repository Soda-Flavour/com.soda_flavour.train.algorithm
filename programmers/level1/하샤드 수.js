function solution(x) {
  return (x % ((x + '').split('').reduce((p, v) => p + parseInt(v, 10), 0)) === 0) ? true : false;

}