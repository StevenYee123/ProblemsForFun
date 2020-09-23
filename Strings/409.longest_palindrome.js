var longestPalindrome = function(s) {
  let ans = 0;
  let keys = {};
  
    
  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
      //Just add as we go!
    if (keys[char] % 2 == 0) ans += 2;
  }
    
    //If the length is greater than our answer we can add one extra 
  return s.length > ans ? ans + 1 : ans;
};