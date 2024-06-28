function solution(progresses, speeds) {
    var answer = [];
    let arr = [];
    for(let i = 0; i < progresses.length; i++){
        arr.push(Math.ceil((100 - progresses[i])/speeds[i]));
    }
    console.log(arr);
    let max = 0;
    let count = 1;
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            if(max !== 0){
                answer.push(count);
            }
            max = arr[i];
            count = 1;
        }
        else{
            count++;
        }
    }
    answer.push(count);
    return answer;
}