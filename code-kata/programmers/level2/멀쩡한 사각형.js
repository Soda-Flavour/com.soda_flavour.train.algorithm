function solution(w, h) {
  let min = Math.min(w, h);
  let max = Math.max(w, h);
  let gcdVal = gcd(min, max);

  return (w * h) - (min + max - gcdVal);
}

function gcd(a, b) {
  return (a % b === 0) ? b : gcd(b, a % b);
}