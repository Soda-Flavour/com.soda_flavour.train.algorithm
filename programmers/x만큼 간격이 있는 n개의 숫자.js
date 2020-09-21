function solution(x, n) {
  var answer = [x];
  if (n == 0) return [];

  for (let i = 1; i < n; i++) {
    answer.push(x + answer[answer.length - 1]);
  }
  return answer;
}