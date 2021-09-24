function angryProfessor(k, a) {
  a.sort((a, b) => a - b);
  let idx_1 = a.filter((v) => v < 1);
  if (idx_1.length < k) return 'YES';
  return 'NO';
}
