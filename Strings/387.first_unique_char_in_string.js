var firstUniqChar = function(s) {
    let chars = {};
    for(let i = 0; i < s.length; i++){
        let curr = s[i];
        if(chars[curr] !== undefined){
            chars[curr] = false;
        } else {
            chars[curr] = i;
        }
    }
    
    let indices = [];
    
    for(let key in chars){
        if(chars[key] === 0 || chars[key]){
            indices.push(chars[key]);
        }
    }
    
    console.log(indices);
    
    return indices.length ? Math.min(...indices) : -1;
};