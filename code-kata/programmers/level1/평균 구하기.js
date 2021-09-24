function solution(arr) {
  return arr.reduce((p, v) => p + v, 0) / arr.length;
}