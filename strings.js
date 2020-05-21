const lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let size = 0;
    let lookup = {}; 
    
    if(s.length < 2) {
        return s.length;
    }
    
    for(let i = 0; i < s.length;  i++) {
        if(lookup[s[i]] === undefined) {
            size += 1;
        } else {
            size = Math.min(i - lookup[s[i]], size + 1);
        }
        
        max_len = Math.max(max_len, size);
        lookup[s[i]] = i; //save the index
    }
    
    return max_len;
};

// ############################################################################################################

var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    
    for (let i = 0; i < haystack.length - needle.length; i++){
        let subString = haystack.slice(i, needle.length);
        if (subString === needle){
            return i;
        }
    }
    
    return -1;
};

// ############################################################################################################

// var longestCommonPrefix = function(strs) {
//     let commonPrefix = "";
//     let shortestWord = strs[0];
//     strs.forEach((word) => {
//         if(word.length < shortestWord.length) {
//             shortestWord = word;
//         }
//     });

//     for (let i = 0; i <= shortestWord.length; i++){
//         const isCommonPrefix = strs.every((word) => {
//             return word.slice(0, i) === shortestWord.slice(0, i);
//         });
        
//         if (isCommonPrefix) {
//             commonPrefix = shortestWord.slice(0, i);
//         } else {
//             break;
//         }
//     }
    
//     return commonPrefix;
// };

// console.log(longestCommonPrefix(["flowers", "flow"]));

// ############################################################################################################

// var strStr = function(haystack, needle) {
//     if (needle === "") return 0;
    
//     for (let i = 0; i < haystack.length - needle.length; i++){
//         let subString = haystack.slice(i, needle.length + i);
//         if (subString === needle){
//             return i;
//         }
//     }
    
//     return -1;
// };

// ############################################################################################################

// var validPalindrome = function(s) {
//     let i = 0;
//     let j = s.length - 1;
//     while (i < j){
//         if (s.charAt(i) !== s.charAt(j)){
//             return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
//         }
        
//         i++;
//         j--;
//     }
    
//     return true;
// };

// function isPalindrome(string, i, j){
//     while (i < j){
//         if (string.charAt(i++) !== string.charAt(j--)) return false;
//     }
    
//     return true;
// }