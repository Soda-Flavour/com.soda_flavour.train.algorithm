function hurdleRace(k, height) {
  let drink = 0;
  let hisJump = k;

  for (let i = 0; i < height.length; i++) {
    if (hisJump < height[i]) {
      let addDrink = height[i] - hisJump;
      drink = drink + addDrink;
      hisJump += addDrink;
    }
  }
  return drink;
}
