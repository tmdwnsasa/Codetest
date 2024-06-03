function solution(today, terms, privacies) {
    var answer = [];
    let [year, month, day] = today.split(".");
    let termsArr = {};
    for(let i = 0; i < terms.length; i++){
        let arr = terms[i].split(" ");
        termsArr[arr[0]] = arr[1];
    }
    let currTime  = year * 12 * 28 + month * 28 + Number(day);
    for(let i = 0; i < privacies.length; i++){
        let pdata = privacies[i].split(" ");
        let [pyear, pmonth, pday] = pdata[0].split(".");
        let pTime  = pyear * 12 * 28 + pmonth * 28 + Number(pday);
        console.log(currTime - pTime);
        console.log(termsArr[pdata[1]] * 28);
        if(currTime - pTime >= termsArr[pdata[1]]*28)
            answer.push(i+1)
    }
    return answer;
}