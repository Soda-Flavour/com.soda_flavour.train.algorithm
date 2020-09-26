function solution(number, k) {

  let arr = [];
  for (let i = 0; i < number.length; i++) {
    let v = number[i];

    while (k > 0 && arr[arr.length - 1] < v) {
      arr.pop();
      k--;
    }
    arr.push(v);

  }

  arr.splice(arr.length - k, k)

  return arr.join('')
}