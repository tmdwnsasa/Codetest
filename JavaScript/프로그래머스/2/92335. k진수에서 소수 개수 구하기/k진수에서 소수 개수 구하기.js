function solution(n, k) {
    n = n.toString(k);
    let arr = [];
    arr = n.split("0");
    let answer = arr.filter((num)=> {
        if (num !== "" && num > 1){
            num = Number(num);
            let check = true;
            console.log(Math.sqrt(num))
            for(let i = 2; i <= Math.sqrt(num); i++){
                if(num % i === 0){
                    check= false;
                }
            }
            if(check === true){
                console.log(check);
                return true;
            }
        }
        return false;
    }).length;
    return answer;
}