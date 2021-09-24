function solution(s) {
  let lowerStr = s.toLowerCase();
  let strArr = lowerStr.split('');

  return strArr.reduce((p, v, i) => {
    if (p.length == 0) {
      p.push(v.toUpperCase())
      return p;
    }
    if (p[p.length - 1] == ' ') {
      p.push(v.toUpperCase());
    } else {
      p.push(v);
    }
    return p;


  }, []).join('');

}