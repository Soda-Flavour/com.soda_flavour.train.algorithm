function solution(n) {
  let a = Math.ceil(n / 2);
  let b = '수박'.repeat(a);

  return b.slice(0, n);
}