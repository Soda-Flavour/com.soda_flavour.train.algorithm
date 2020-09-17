function solution(s, n) {
  var answer = '';
  let low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let up = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];




  return s.split('').map((v) => {
    let index;
    if (v === ' ') return ' ';
    if (low.indexOf(v) === -1) {
      index = up.indexOf(v) + n
      if (index > up.length - 1) {
        index = index - up.length;
      }
      return up[index];
    } else {
      index = low.indexOf(v) + n;
      if (index > low.length - 1) {
        index = index - low.length;
      }
      return low[index];
    }

  }).join('')


}