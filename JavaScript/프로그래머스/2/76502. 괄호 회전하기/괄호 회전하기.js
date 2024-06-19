function solution(s) {
    var answer = 0;
    let Arr = s.split("");
    for(let i = 0; i < Arr.length; i++){
        let vali = [];
        Arr.push(Arr[0]);
        Arr.shift();
        let check = false;
        for(let j = 0; j < Arr.length; j++){
            if(Arr[j] === "(" || Arr[j]=== "{" || Arr[j]==="[")
                vali.push(Arr[j]);
            else if(Arr[j] === ")" && vali[vali.length-1] === "(")
                vali.pop();
            else if(Arr[j] === "}" && vali[vali.length-1] === "{")
                vali.pop();
            else if(Arr[j] === "]" && vali[vali.length-1] === "[")
                vali.pop();
            else
                vali.push(Arr[j]);
        }
        if(vali.length === 0){
            answer++;
        }
    }
    return answer;
}