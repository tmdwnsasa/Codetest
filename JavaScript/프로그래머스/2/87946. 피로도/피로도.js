function dfs(k, dungeons, visit, index, answer, resultArr) {
    for(let i=0; i < dungeons.length; i++){
        if((!visit[i]) && (k >= dungeons[i][0])){   
            visit[i] = true;
            k -= dungeons[i][1];

            resultArr.push(answer+1);
            dfs(k, dungeons, visit, i+1, answer+1, resultArr);

            visit[i] = false;
            k += dungeons[i][1];
        }
    }
}

function solution(k, dungeons) {
    var answer = 0;
    let index = 0;
    const resultArr = [];
    const visit = Array(dungeons.length).fill(false);

    dfs(k,dungeons,visit,index,answer,resultArr);
    answer = Math.max(...resultArr);

    return answer;
}