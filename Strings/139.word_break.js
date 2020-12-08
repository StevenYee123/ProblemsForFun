var wordBreak = function(s, wordDict) {
    let dict = new Set(wordDict);
    
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for(let end = 1; end <= s.length; end++){
        for(let start = 0; start < end; start++){
            let word = s.slice(start, end);
            if(dp[start] && dict.has(word)){
                dp[end] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
};