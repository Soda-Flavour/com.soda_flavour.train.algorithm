function solution(numbers, hand) {
  var answer = '';

  let padObj = {
    1: {
      x: 0,
      y: 0
    },
    2: {
      x: 1,
      y: 0
    },
    3: {
      x: 2,
      y: 0
    },
    4: {
      x: 0,
      y: 1
    },
    5: {
      x: 1,
      y: 1
    },
    6: {
      x: 2,
      y: 1
    },
    7: {
      x: 0,
      y: 2
    },
    8: {
      x: 1,
      y: 2
    },
    9: {
      x: 2,
      y: 2
    },
    0: {
      x: 1,
      y: 3
    }
  };

  let data = {
    left_h: {
      x: 0,
      y: 3
    },
    right_h: {
      x: 2,
      y: 3
    }
  }

  answer = numbers.reduce((p, v) => {
    if (v == 1) {
      data.left_h = padObj[v];
      return p + 'L';
    }
    if (v == 4) {
      data.left_h = padObj[v];
      return p + 'L';
    }
    if (v == 7) {
      data.left_h = padObj[v];
      return p + 'L';
    }

    if (v == 3) {
      data.right_h = padObj[v];
      return p + 'R';
    }
    if (v == 6) {
      data.right_h = padObj[v];
      return p + 'R';
    }
    if (v == 9) {
      data.right_h = padObj[v];
      return p + 'R';
    }
    if ((v == 2) || (v == 5) || (v == 8) || (v == 0)) {
      let leftPos = handDistanceCheker(data.left_h, v);
      let rightPos = handDistanceCheker(data.right_h, v);
      if (leftPos > rightPos) {
        data.right_h = padObj[v];
        return p + 'R';
      } else if (leftPos < rightPos) {
        data.left_h = padObj[v];
        return p + 'L';
      } else {
        if (hand === 'right') {
          data.right_h = padObj[v];
          return p + 'R';
        } else {
          data.left_h = padObj[v];
          return p + 'L';
        }
      }
    }

  }, '');

  function handDistanceCheker(hand_data, v) {
    return Math.abs((hand_data.x - padObj[v].x)) + Math.abs((hand_data.y - padObj[v].y));
  }
  return answer;
}