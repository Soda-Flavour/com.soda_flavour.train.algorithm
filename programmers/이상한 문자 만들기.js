function solution(s) {
  return s.split(' ').map((aa) => {
    return aa.split('').map((v, i) => {
      if (i % 2 == 0) return v.toUpperCase();
      else return v.toLowerCase();
    }).join('');
  }).join(' ');
}