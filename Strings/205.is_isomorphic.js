var isIsomorphic = function(s, t) {
    let obj = {};

    for(let i = 0; i < s.length; i++){
        if(!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
        if(!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
        if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;
    }
    
    console.log(obj);
    
    return true;
};

console.log(isIsomorphic("egg", "add"));