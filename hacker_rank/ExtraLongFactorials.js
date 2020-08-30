function extraLongFactorials(n) {
  let result = 1n;
  n = BigInt(n);
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  console.log(result.toString(10));
}
