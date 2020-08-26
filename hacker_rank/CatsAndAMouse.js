//쥐와의 거리의 절개값이 가까운 고양이가 이김
//고양이들의 거리 절대 값이 같으면 쥐가 이김
function catAndMouse(x, y, z) {
  let catXDistance = Math.abs(x - z);
  let catYDistance = Math.abs(y - z);

  if (catXDistance > catYDistance) return 'Cat B';
  else if (catXDistance < catYDistance) return 'Cat A';
  else return 'Mouse C';
}
