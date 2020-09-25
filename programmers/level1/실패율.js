function solution(N, stages) {
  var answer = [];
  stages.sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    let cnt = stages.length;
    let num = stages.splice(0, stages.lastIndexOf(i) + 1).length;

    answer.push({
      "stage": i,
      "val": num / cnt
    });
  }

  answer.sort((a, b) => b["val"] - a["val"]);
  return answer.map((v) => v.stage);
}