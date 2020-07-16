const longestPalindrome = (s) => {
    if(!s || s.length <= 1){
        return s;
    }
    
    let longest = "";
    for(let i = 0; i < s.length; i++){
        let testString = expand(s, i, i);
        if (testString.length > longest.length){
            longest = testString;
        }
        
        testString = expand(s, i, i + 1);
        if(testString.length > longest.length){
            longest = testString;
        }
    }
    
    return longest;
}

const expand = (s, begin, end) => {
    while(begin >= 0 && end < s.length && s[begin] === s[end]){
        begin--;
        end++;
    }
    
    return s.slice(begin + 1, end);
}