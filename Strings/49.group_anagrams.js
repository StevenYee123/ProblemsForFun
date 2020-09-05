var groupAnagrams = function(strs) {
    if(!strs) return [];
    let words = {};
    for(let i = 0; i < strs.length; i++){
        let curr = strs[i].split("").sort().join("");
        if(words[curr] !== undefined){
            words[curr].push(strs[i]);
        } else {
            words[curr] = [strs[i]];
        }
    }
    
    let result = [];
    
    return Object.values(words);
};