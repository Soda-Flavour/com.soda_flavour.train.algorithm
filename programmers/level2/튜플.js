function solution(s) {
  let _s = s.substring(2, s.length - 2);
  let a = _s.split('},{');

  a.sort((a, b) => a.length - b.length);

  return a.reduce((p, v) => {
    let arr = v.split(',');
    arr.forEach((v) => {
      if (p.indexOf(parseInt(v, 10)) === -1) {
        p.push(parseInt(v, 10));
      }
    });
    return p;

  }, []);
}