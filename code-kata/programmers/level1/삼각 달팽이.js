function solution(n) {
  var answer = [];
  let num = ((1 + n) * (n)) / 2;
  let canvas = [];

  for (let i = 1; i <= n; i++) {
    let innerArr = Array(i).fill(0);
    canvas.push(innerArr);
  }

  let idx = 1;
  let row = -1;
  let column = 0;
  let arrow = 'down';
  let continueNum = n;

  while (idx <= num) {
    if (arrow === 'down') {
      let i = 0;
      while (i < continueNum) {
        row++;
        canvas[row][column] = idx;
        idx++;
        i++;
      }
      continueNum--;
      arrow = "right";
    } else if (arrow === 'right') {
      let i = 0;
      while (i < continueNum) {
        column++;
        canvas[row][column] = idx;
        idx++;
        i++;
      }
      continueNum--;
      arrow = "up";
    } else if (arrow === 'up') {
      let i = 0;
      while (i < continueNum) {
        column--;
        row--;
        canvas[row][column] = idx;
        idx++;
        i++;
      }
      continueNum--;
      arrow = "down";

    }

  }
  return canvas.flat(Infinity);
}
solution(6);