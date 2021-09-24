function permutationEquation(p) {
  let resultArr = [];
  for (let i = 1; i <= p.length; i++) {
    let idx = p.indexOf(i) + 1;
    resultArr.push(p.indexOf(idx) + 1);
  }
  return resultArr;
}
