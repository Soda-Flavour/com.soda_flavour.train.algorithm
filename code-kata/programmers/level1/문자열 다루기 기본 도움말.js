function solution(s) {
  var answer = true;
  if (s.length != 4 && s.length != 6) return false;
  let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return s.split('').filter((v) => num.indexOf(v) === -1).length === 0;
}