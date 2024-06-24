function solution(n, left, right) {
    var answer = [];
    for(let i = Math.floor(left / n); i <= Math.floor(right/n); i++){
        let j, max;
        if (Math.floor(left/n) === Math.floor(right/n)){
            j = left%n;
            max = right%n;
        }
        else if(i === Math.floor(left/n)){
            j = left%n;
            max = n-1;
        }
        else if (i === Math.floor(right/n)){
            j = 0;
            max = right%n;
        }
        else{
            j = 0;
            max = n-1;
        }
        for(; j <= max; j++){
            if(i > j){
                answer.push(i+1);
            }
            else{
                answer.push(j+1);
            }
        }
    }
    return answer;
}