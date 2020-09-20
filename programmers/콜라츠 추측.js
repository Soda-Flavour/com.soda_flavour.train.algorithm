function solution(num) {
  let cnt = 0;

  loop(num);
  if (cnt > 500) return -1;
  else return cnt;

  function loop(num) {
    if (num == 1) return;
    if (num % 2 === 0) {
      num = parseInt(num / 2, 10);
    } else num = num * 3 + 1;

    cnt++;
    loop(num);
  }

}