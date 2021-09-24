function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    let num = a.pop();
    a.unshift(num);
  }
  let result = [];
  for (let m of queries) {
    result.push(a[m]);
  }
  return result;
}
