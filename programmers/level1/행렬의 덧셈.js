function solution(arr1, arr2) {
  var answer = arr1;

  let rowLeng = arr1.length;
  let columnLeng = arr1[0].length;

  for (let i = 0; i < rowLeng; i++) {
    for (let j = 0; j < columnLeng; j++) {
      answer[i][j] += arr2[i][j]
    }


  }

  return answer;
}