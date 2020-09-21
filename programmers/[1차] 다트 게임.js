function solution(dartResult) {
  let answer = []
  let stgData = dartResult.split('');

  for (let i = 1; i <= 3; i++) {
    let stgPoint;
    let stgPrice;
    if (stgData[1] === '0') {
      if (stgData[2] == '*' || stgData[2] == '#') {
        stgPoint = stgData.splice(0, 3);
        stgPrice = stgData.splice(0, 1)[0];
      } else {
        stgPoint = stgData.splice(0, 3)
      }
    } else {
      if (stgData[2] == '*' || stgData[2] == '#') {
        stgPoint = stgData.splice(0, 2);
        stgPrice = stgData.splice(0, 1)[0];
      } else {
        stgPoint = stgData.splice(0, 2);
      }
    }

    let area = stgPoint.splice(stgPoint.length - 1, 1)[0];
    let point = stgPoint.join('');
    if (area == 'S') {
      point = Math.pow(point, 1);
    } else if (area == 'D') {
      point = Math.pow(point, 2);
    } else if (area == 'T') {
      point = Math.pow(point, 3);
    }

    if (stgPrice !== undefined) {
      if (stgPrice === '*') {
        point = point * 2;
        if (answer.length > 0) {
          answer[answer.length - 1] = answer[answer.length - 1] * 2;
        }
      } else if (stgPrice === '#') {
        point = point * -1;
      }
    }

    answer.push(point);

  }

  return answer.reduce((p, v) => p + v, 0);
}