function solution(n) {
    let Arr = [];
    Arr[0] = 1;
    Arr[1] = 1;
    for(let i = 2; i <= n; i++){
        Arr[i] = (Arr[i-1] + Arr[i-2]) % 1234567;
    }
    
    return Arr[n];
}