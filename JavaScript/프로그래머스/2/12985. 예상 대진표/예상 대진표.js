function solution(n,a,b)
{
    var answer = 0;

    for(i = 0; i <= Math.sqrt(n); i++){
        b = Math.ceil(b/2);
        a = Math.ceil(a/2);
        console.log(b + " / " + a)
        answer++;
        if(a === b)
            break;
    }

    return answer;
}