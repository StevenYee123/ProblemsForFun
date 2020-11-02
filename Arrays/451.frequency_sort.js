var frequencySort = function(s) {
    let charCount = {};
    for(let i = 0; i < s.length; i++){
        let currChar = s[i];
        if(charCount[currChar] !== undefined){
            charCount[currChar]++;
        } else {
            charCount[currChar] = 1;
        }
    }
    
    let sorted = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);  
    let res = "";
    
    for(let i = 0; i < sorted.length; i++){
        let curr = sorted[i];
        res += curr.repeat(charCount[curr]);
    }
    
    return res;
};