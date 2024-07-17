function solution(x, y, n) {
    var answer = -1;
    let arr = [];
    let visit = {};
    let count = 0;
    arr.push([y, 0]);
    
    function bfs (){
        
        while(arr.length){
            let [num, count] = arr.shift();
        
            if(num === x){
                return count;
            }
        
            if(visit[num]){
                continue;
            }
            visit[num] = 1;
            if(Number.isInteger(num/2) && num/2 >= x){
                arr.push([num/2, count+1])
            }
            if(Number.isInteger(num/3) && num/3 >= x){
                arr.push([num/3, count+1])
            }
            if(num-n >= x){
                arr.push([num-n, count+1])
            }
        }
        return -1;
    }
    
    return bfs(y);
}