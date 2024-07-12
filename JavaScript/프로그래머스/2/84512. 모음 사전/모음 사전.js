

function solution(word) {
    var answer = 0;
    let curWord = '';
    let found = false;
    
    function dfs(letter, curWord, word, maxDepth) {
        if(found === true){
            return;
        }
        
        curWord += letter;
        answer += 1;
        
        
        if(curWord === word){
            found = true;
            return;
        }
        
        if(curWord.length === maxDepth){
            return;
        }
        
        dfs('A', curWord, word, 5);
        dfs('E', curWord, word, 5);
        dfs('I', curWord, word, 5);
        dfs('O', curWord, word, 5);
        dfs('U', curWord, word, 5);
    }
    
    dfs('A', curWord, word, 5);
    dfs('E', curWord, word, 5);
    dfs('I', curWord, word, 5);
    dfs('O', curWord, word, 5);
    dfs('U', curWord, word, 5);
    return answer;
}