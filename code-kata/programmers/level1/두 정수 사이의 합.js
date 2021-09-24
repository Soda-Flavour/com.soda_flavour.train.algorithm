function solution(a, b) {
  var answer = 0;
  if (a == b) return a;
  a > b && ([a, b] = [b, a])

  for (let i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
}