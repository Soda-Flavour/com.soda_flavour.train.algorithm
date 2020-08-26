function pageCount(n, p) {
  let frontCnt = Math.floor(p / 2);
  let endCnt = Math.floor(n / 2) - frontCnt;

  if (frontCnt > endCnt) return endCnt;
  return frontCnt;
}
