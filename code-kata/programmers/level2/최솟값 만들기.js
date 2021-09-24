function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((p, v, i) => {
    return p + (v * B[i])
  }, 0)

}