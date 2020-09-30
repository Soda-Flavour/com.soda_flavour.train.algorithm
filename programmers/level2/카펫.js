function solution(brown, yellow) {
  let yellowHigh = 1;
  if (yellow == 1) return [3, 3]
  while (true) {
    let yellowWidth = Math.floor(yellow / yellowHigh);
    let brownCnt = (yellowWidth + 2) * 2 + yellowHigh * 2;
    if (brownCnt == brown && yellowWidth <= yellowHigh) return [yellowHigh + 2, yellowWidth + 2];
    yellowHigh++;
  }
}