function viralAdvertising(n) {
  let sum = 2;
  let originP = 5;
  let originL = 2;
  for (let i = 2; i <= n; i++) {
    originP = Math.floor(originP / 2) * 3;
    originL = Math.floor(originP / 2);
    sum = sum + originL;
  }
  return sum;
}
