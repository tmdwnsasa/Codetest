function solution(k, tangerine) {
    var answer = 0;
    let Obj = {};
    
    for(const data of tangerine){
        if(!Obj[data]){
            Obj[data]=1;
        }
        else
            Obj[data]++;
    }
    const sorting = Object.entries(Obj).sort(([,a],[,b])=>b-a);
    let count = 0;
    for(; answer < sorting.length; answer++){
        count += sorting[answer][1];
        if(count >= k){
            answer++;
            break;
        }
    }
    return answer;
}