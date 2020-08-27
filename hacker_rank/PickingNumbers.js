function pickingNumbers(a) {
  let arr = Array(a.length + 1).fill(0);
  let max = 0;
  a.forEach((v) => {
    arr[v] += 1;
  });

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != 0) {
      if (max < arr[i]) max = arr[i];
    }
    if (arr[i] != 0 && arr[i - 1] != 0) {
      let sum = arr[i] + arr[i - 1];
      if (max < sum) max = sum;
    }
  }
  return max;
}
