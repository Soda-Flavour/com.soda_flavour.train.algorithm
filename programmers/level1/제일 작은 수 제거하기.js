function solution(arr) {
  var answer = [];
  let min = Math.min(...arr);
  let fArr = arr.filter((v) => v !== min);
  if (fArr.length == 0) return [-1];
  return fArr;
}