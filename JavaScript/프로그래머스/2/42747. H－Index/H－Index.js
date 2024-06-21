function solution(citations) {
    var answer = 0;
    let check = false;
    citations.sort((a,b)=>b-a);
    for(let i = 1; i <= citations.length; i++){
        console.log(citations[i-1] + " / " + i);
        if(citations[i-1] === i){
            answer = i;
            check = true;
            break;
        }
        else if(citations[i-1] < i){
            answer = i-1;
            check =true;
            break;
        }
    }
    if(check === false)
        answer = citations.length;
    return answer;
}