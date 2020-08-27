function utopianTree(n) {
  let height = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      if (i == 0) {
        height = 1;
        continue;
      }
      height += 1;
    } else {
      height = height * 2;
    }
  }
  return height;
}
