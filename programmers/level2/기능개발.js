function solution(progresses, speeds) {
    var answer = [];
    let arr = progresses;
    while(arr.length>0){
        for(let i=0;i< arr.length;i++){
            if(arr[i]<=100){
                arr[i] = arr[i] + speeds[i];
            }
        }


        if(arr[0] >=100){
            let idx = 0;
            let count = 0;
            while(true){
                if(arr[idx]>= 100){
                    count++;
                }else{
                    break;
                }
                idx++;
            }
            arr.splice(0,count);
            speeds.splice(0,count);
            answer.push(count);
        }

    }

  return answer;
}