function solution(priorities, location) {

  let arr = priorities.map((val, idx) => {
    return {
      val: val,
      is_find_val: (idx == location) ? 'y' : 'n'
    };
  });
  let cnt = 0;
  while (true) {
    let firstObg = arr.shift();
    let firstVal = firstObg.val;

    if (arr.some((v) => v.val > firstVal)) {
      arr.push(firstObg);
    } else {
      cnt++;
      if (firstObg.is_find_val == 'y') return cnt;
    }



  }


  return cnt;
}