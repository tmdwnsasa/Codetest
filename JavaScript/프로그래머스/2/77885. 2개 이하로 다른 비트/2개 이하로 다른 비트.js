function solution(numbers) {
    var answer = [];
    const transform = (num) => {
        let arr = num.toString(2).split('');
        let lastIndex = arr.lastIndexOf('0');
        
        if(lastIndex === -1){
            arr.splice(1, 0, '0');
        } else if(lastIndex === arr.length-1){
            arr[lastIndex] = '1';
        }
        else{
            [arr[lastIndex], arr[lastIndex+1]] = [arr[lastIndex+1], arr[lastIndex]]
        }
        return parseInt(arr.join(''),2); 
    }
    for(const num of numbers){
        answer.push(transform(num));
    }
    return answer;
}