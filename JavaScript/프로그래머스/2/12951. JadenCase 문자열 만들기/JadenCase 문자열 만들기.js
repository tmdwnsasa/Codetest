function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    const regex = /^[a-z]$/;
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0])
            arr[i] = arr[i][0] + arr[i].slice(1).toLowerCase();
        if(regex.test(arr[i][0])){
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
        }
    }
    answer = arr.join(" ");
    return answer;
}