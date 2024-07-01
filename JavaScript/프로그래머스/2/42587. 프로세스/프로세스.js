function solution(priorities, location) {
    var answer = 0;
    let count = 0;
    let save = 0;
    
    for(let i = 9; i >= 0; i--) {
        let temp = null;
        count = save;
        while(true) {
            if(priorities[count] === i){
                answer++;
                if(count === location){
                    return answer;
                }
                temp = count;
            }
            count++;
            
            if(count >= priorities.length) {
                count = 0;
            }
            if(count === save){
                if(temp!= null){
                    save = temp;
                }
                break;
            }
            
        }
    }
}