function solution(players, callings) {
    var answer = [];
    const map = new Map();
    for(let i = 0; i < players.length; i++){
        map.set(players[i], i);
    }
    for (let i = 0; i < callings.length; i++) {
        
        const idx = map.get(callings[i]);
        const temp = players[idx-1];
        
        players[idx - 1] = callings[i];
        players[idx] = temp;
        
        map.set(callings[i], idx-1);
        map.set(temp, idx);
        
    }
    answer = players;
    return answer;
}