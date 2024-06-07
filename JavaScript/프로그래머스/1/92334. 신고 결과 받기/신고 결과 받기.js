function solution(id_list, report, k) {
    var answer = {};
    let getMessage = {};
    report.sort();
    
    for(let i = 0; i < id_list.length; i++){
        answer[id_list[i]] = 0;
        getMessage[id_list[i]] = new Set();
    }
    for(let i = 0; i < report.length; i++){
        const [first, second] = report[i].split(" ");
        getMessage[second].add(first);
    }
    for(let i = 0; i < id_list.length; i++){
        if(getMessage[id_list[i]].size >= k){
            const arr = Array.from(getMessage[id_list[i]]);
            for(let j = 0; j < arr.length; j++){
                answer[arr[j]]++;
            }
        }
    }
    return Object.values(answer);
}