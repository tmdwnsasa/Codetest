function solution(numbers, target) {
    var answer = 0;
    const dfs = (index, value) => {
        if(numbers.length === index && value === target){
            answer++;
            return;
        }
        else if(numbers.length === index && value !== target){
            return;
        }
        
        dfs(index+1, value+numbers[index]);
        dfs(index+1, value-numbers[index]);
    }
    
    dfs(0, 0);
    return answer;
}