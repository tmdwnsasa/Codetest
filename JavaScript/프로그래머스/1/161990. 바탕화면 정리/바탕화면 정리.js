function solution(wallpaper) {
    var answer = [];
    let lux = wallpaper[0].length, luy = wallpaper.length, rdx = 0, rdy = 0;
    //i = y, j = x
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j]==='#'){
                if(lux > j){
                    lux = j;
                }
                if(rdx < j){
                    rdx = j;
                }
                if(luy > i){
                    luy = i;
                }
                if(rdy < i){
                    rdy = i;
                }
            }
        }
    }
    answer.push(luy);
    answer.push(lux);
    answer.push(rdy+1);
    answer.push(rdx+1);
    return answer;
}