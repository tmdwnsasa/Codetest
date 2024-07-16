function solution(topping) {
    var answer = 0;
    let obj = new Map();
    let obj2 = new Map();
    for(let i = 0; i < topping.length; i++){
        if(!obj.get(topping[i]))
            obj.set(topping[i], 0);
        obj.set(topping[i], obj.get(topping[i])+1);
    }
    for(let i = topping.length; i >= 0; i--){
        if(!obj2.get(topping[i]))
            obj2.set(topping[i], 0);
        obj2.set(topping[i], obj2.get(topping[i])+1);
        obj.set(topping[i], obj.get(topping[i])-1);
        if(obj.get(topping[i]) === 0){
            obj.delete(topping[i]);
        }
        if(obj.size === obj2.size){
            answer++;
        }
    }
    return answer;
}