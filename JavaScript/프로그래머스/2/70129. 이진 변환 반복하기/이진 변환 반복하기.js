function solution(s) {
    var answer = [];
    answer.push(0);
    answer.push(0);
    while(s.length !== 1){
        answer[0]++;
        let arr = s.split("0");
        answer[1] += arr.length - 1;
        s = arr.join("");
        s = s.length.toString(2);
    }
    return answer;
}