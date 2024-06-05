function solution(park, routes) {
    var answer = [];
    let directions = {"N":[-1,0], "S":[1,0], "W":[0,-1], "E":[0,1]};
    let maxX = park[0].length - 1;
    let maxY = park.length - 1;
    let check = true;
    for(let i = 0; i <= maxY; i++)
        for(let j = 0; j <= maxX; j++)
            if(park[i][j] === 'S'){
                answer.push(i);
                answer.push(j);
            }
    
    for(const move of routes){
        const [direction, amount] = move.split(" ");
        let d = directions[direction];
        check = true;
        
        for(let i = 1; i <= amount; i++){
            if( answer[0]+(d[0]*amount) > maxY ||
                answer[1]+(d[1]*amount) > maxX || 
                answer[0] + (d[0]*amount) < 0 ||
                answer[1] + (d[1]*amount) < 0)  {
                check = false;
                break;
            }
            if(park[answer[0]+ (d[0] * i)][answer[1]+ (d[1] * i)]  === 'X'){
                check = false;
                break;
            }
        }
        
        if(check === true){
            answer[0] += (d[0]*amount);
            answer[1] += (d[1]*amount);
        }
    }
    return answer;
}