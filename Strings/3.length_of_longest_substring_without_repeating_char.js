var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let currentSize = 0;
    let charTracker = {};
    for(let i = 0; i < s.length; i++){
        let curr = s[i];
        if(charTracker[curr] !== undefined){
            currentSize = Math.min(currentSize + 1, i - charTracker[curr]);
        } else {
            currentSize++;
        }
        
        charTracker[curr] = i;
        max = Math.max(max, currentSize);
    }
    
    return max;
};