function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i++) {
    let heightY = i;
    if (yellow % i != 0) continue;

    let widthY = yellow / i;
    let _brown = heightY * 2 + widthY * 2 + 4;
    if (brown == _brown) {
      return [widthY + 2, heightY + 2]
    }

  }
}