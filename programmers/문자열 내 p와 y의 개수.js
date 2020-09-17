function solution(s) {
  var answer = true;
  let numY = s.split('').filter((v) => v == 'Y' || v == 'y').length;
  let numP = s.split('').filter((v) => v == 'P' || v == 'p').length;
  return (numY == numP) ? true : false;
}