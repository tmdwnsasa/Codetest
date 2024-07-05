function solution(fees, records) {
    var answer = [];
    let inout = {};
    let timeResult = {};
    for(let i = 0; i < records.length; i++){
        let data = records[i].split(" ");
        let arr = data[0].split(":");
        let time = Number(arr[0])*60 + Number(arr[1]);
        if(data[2] === 'IN'){
            inout[data[1]] = time;
        }
        else {
            if(!timeResult[data[1]]){
                timeResult[data[1]] = time - inout[data[1]];
            }
            else{
                timeResult[data[1]] = timeResult[data[1]] + time - inout[data[1]];
            }
            delete inout[data[1]];
        }
    }
    for(let temp of Object.keys(inout)) {
        if(!timeResult[temp])
            timeResult[temp] = 1439 - inout[temp];
        else
            timeResult[temp] += 1439 - inout[temp];
            
    }
    Object.keys(timeResult).sort().forEach(function(key) {
        let remain = timeResult[key] - fees[0];
        if(remain < 0)
            answer.push(fees[1]);
        else{
            answer.push(Math.ceil(remain / fees[2]) * fees[3] + fees[1]);
        }
    })
    return answer;
}