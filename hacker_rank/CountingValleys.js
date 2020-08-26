function countingValleys(n, s) {
  let arr = Array.from(s);
  //계곡 카운트 값 0;
  let valley = 0;
  let height = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'U') {
      if (height < 0) {
        ++height;
        if (height == 0) valley++;
      } else {
        ++height;
      }
    } else if (arr[i] == 'D') {
      height--;
    }
  }

  return valley;
}
