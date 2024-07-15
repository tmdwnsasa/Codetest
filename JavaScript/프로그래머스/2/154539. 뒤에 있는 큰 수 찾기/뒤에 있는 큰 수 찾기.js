function solution(numbers) {
    var answer = Array(numbers.length).fill(-1);
    
    for(let i = numbers.length-1; i >= 0; i--){
        for(let j = i+1; j < numbers.length; j++){
            if(numbers[j] > numbers[i]){
                answer[i] = numbers[j];
                break;
            }
            else{
                if(answer[j] === -1){
                    answer[i] = -1;
                    break;
                }
                else if(numbers[i] < answer[j]){
                    answer[i] = answer[j];
                    break;
                }
            }
        }
    }
    return answer;
}