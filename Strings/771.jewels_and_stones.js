var numJewelsInStones = function(J, S) {
    let jewels = new Set(J.split(""));
    let numJewels = 0;
    
    for(let i = 0; i < S.length; i++){
        let currentStone = S[i];
        if (jewels.has(currentStone)){
            numJewels++;
        }
    }
    
    return numJewels;
};