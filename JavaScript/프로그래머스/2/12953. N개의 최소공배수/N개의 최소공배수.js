function solution(arr) {
    var answer = 0;
    arr.sort((a,b)=> a - b);
    let count = 1;
    let check = true;
    while(true){
        answer = arr[arr.length-1]*count;
        for(let i = 0; i < arr.length-1; i++){
            if(answer % arr[i] !== 0){
                check = false;
            }
        }
        if(check === true){
            break;
        }
        check = true;
        count++;
    }
    return answer;
}