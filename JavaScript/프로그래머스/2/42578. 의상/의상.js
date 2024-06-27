function solution(clothes) {
    var answer = 1;
    let obj = {};
    for(let i = 0; i < clothes.length; i++){
        if(!obj[clothes[i][1]]){
            obj[clothes[i][1]] = 1;
        }
        else{
            obj[clothes[i][1]]++;
        }
    }
    let kinds = Object.keys(obj).length;
    for(let data of Object.values(obj)){
        answer *= (data+1);   
    }
    return answer-1;
}