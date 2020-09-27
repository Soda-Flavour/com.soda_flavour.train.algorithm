function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let truckCnt = truck_weights.length;
  let compCnt = 0;
  let bridgeCanWeight = weight;
  let bridgeTruck = [];
  let sec = 0;

  //다리를 모두 건널때까지 반복.
  while (compCnt != truckCnt) {
    sec++;

    //다리위 차량의 건너갈 거리를 1씩 줄인다.
    for (let i = 0; i < bridgeTruck.length; i++) {

      bridgeTruck[i][0] = bridgeTruck[i][0] - 1;
    }
    //앞 차량 부터 시간이 0이된 차량을 제거하고 다리가 견딜 수 있는 무게를 올려준다.
    while (true) {
      if (bridgeTruck.length > 0 && bridgeTruck[0][0] == 0) {
        let compTruck = bridgeTruck.shift();
        bridgeCanWeight += compTruck[1];
        compCnt++
      } else break;
    }

    //다리의 무게가 차량의 무게를 견딜수 있다면 올린다.

    if (bridgeCanWeight >= truck_weights[0]) {
      bridgeCanWeight -= truck_weights[0];
      bridgeTruck.push([bridge_length, truck_weights.shift()]); //[건너갈 거리, 차량 무게]
    }

  }
  return sec;
}