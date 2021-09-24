function solution(a, b) {
  let day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let dayz = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  var answer = '';

  let sumMonth = 0;
  for (let i = 0; i < a - 1; i++) {
    sumMonth += dayz[i];
  }
  let sumdayz = sumMonth + b;
  return day[(sumdayz % 7)];
}