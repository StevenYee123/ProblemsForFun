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

// ############################################################################################################

let oneAway = (str1, str2) => {
    let edits = 1;
    let maxLen = Math.max(str1.length, str2.length);

    let diff = Math.abs(str1.length - str2.length);

    if (diff > edits) return false;

    for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++){
        let c1 = str1[i];
        let c2 = str2[j];

        if (c1 !== c2){
            edits--;
        }

        if (edits < 0){
            return false;
        }

        //If an insert/remove is required
        if (c1 === s2[j + 1]){
            j++;
        } else if (s1[i + 1] === s2[j]){
            i++;
        }
    }

    return true;
}
// ##########################################################################################################
//Group anagrams

let groupAnagrams = function(strs) {
    strs = strs.sort();
    let mapping = {};
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let sorted = str.split('').sort().join('');
        
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }
    
    let output = [];
    for (let arr in mapping) {
        output.push(mapping[arr]);
    }
    
    return output;
};

// ##########################################################################################################

// Deletion Distance
// The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:
// By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
// We cannot get the same string from both strings by deleting 2 letters or fewer.
// Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

// input:  str1 = "dog", str2 = "frog"
// output: 3
// input:  str1 = "some", str2 = "some"
// output: 0
// input:  str1 = "some", str2 = "thing"
// output: 9
// input:  str1 = "", str2 = ""
// output: 0

// We could use a hash, to keep track of the letters from the FIRST word, and then iterate through the second word

let deletionDistance = (str1, str2) => {
    let word1 = {};
    let word2 = {};
    let count = 0;

    for (let i = 0; i < str1.length; i++){
        let currentChar = str1[i];
        if (word1[currentChar]){
            word1[currentChar] += 1;
        } else {
            word1[currentChar] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++){
        let currentChar = str2[i];
        if (word2[currentChar]){
            word2[currentChar] += 1;
        } else {
            word2[currentChar] = 1;
        }
    }

    for (currChar in word1){
        if (word2[currChar]){
            count += Math.abs(word1[currChar] - word2[currChar]);
        } else {
            count += word1[currChar];
        }
    }

    for (currChar in word2){
        if (word1[currChar]) {
          count += Math.abs(word1[currChar] - word2[currChar]);
        } else {
          count += word2[currChar];
        }
    }

    return count;
}

console.log(deletionDistance("", ""));