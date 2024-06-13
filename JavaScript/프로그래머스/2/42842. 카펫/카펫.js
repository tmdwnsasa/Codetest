function solution(brown, yellow) {
    var answer = [];
    let sum = brown + yellow;
    for(let i = Math.floor(Math.sqrt(sum)); i >= 2; i--){
        if(sum % i === 0){
            for(let j = i; j > 0; j--){
                if((i - j) * (sum/i -j) === yellow){
                    answer.push(sum/i);
                    answer.push(i);
                }
            }
        }
    }
    return answer;
}