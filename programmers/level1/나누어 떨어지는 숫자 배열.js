function solution(arr, divisor) {
  let sol = arr.filter((v) => v % divisor == 0).sort((a, b) => a - b)
  return (sol.length == 0) ? [-1] : sol;
}