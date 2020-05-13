// let num = 123;
// const reversed = parseInt(String(Math.abs(num)).split("").reverse().join(""));
// const reverse = (num) => {
//     const limit = 2147483648;
//     const isPos = num < 0 ? -1 : 1;
//     const reversed = parseInt(String(Math.abs(num)).split("").reverse().join(""));
//     return reversed > limit ? 0 : reversed * isPos;
// }

// console.log(parseInt(String(Math.abs(-210)).split("").reverse().join("")));

// ############################################################################################################

// const spaceShip = (val1, val2) => {
//     return val1 > val2 ? 1 : val1 === val2 ? 0 : -1;
// }

// ############################################################################################################

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

// "abcabcbb"
// i = 3
// s[i] = "a"
// size => 0
// max_len = 3

// ############################################################################################################

// var isValid = function(s) {
//     if (!s.length) return true;
//     const brackets = {
//         "(" : ")",
//         "[" : "]",
//         "{" : "}"
//     }
//     let stack = [];
    
//     for(let i = 0; i < s.length; i++){
//         if(brackets[s[i]] !== undefined){
//             stack.push(s[i]);
//         } else if (brackets[stack.pop()] != s[i]){
//             return false;
//         }
//     }
    
//     return stack.length === 0;
// };

// console.log(isValid("()"));

// ############################################################################################################

// var removeDuplicates = function (nums) {
//     let index = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] !== nums[i + 1]){
//             nums[index++] = nums[i];
//         }
//     }

//     return array.length;
// };

// console.log(removeDuplicates([1,1,2]));

// ############################################################################################################

// function bSearch(arr, target) {
//     if (arr.length <= 1 && arr[0] !== target) return null;
//     const mid = Math.floor(arr.length / 2);
//     if (arr[mid] === target) return mid;

//     if (target < arr[mid]) {
//         return bSearch(arr.slice(0, mid), target);
//     } else {
//         let rightSearch = bSearch(arr.slice(mid + 1), target);
//         return rightSearch === null ? null : mid + rightSearch + 1;
//     }
// }

// arr = [1,2,3,4,5,6];
// target = 8;
// console.log(bSearch(arr, target));

// ############################################################################################################

var longestCommonPrefix = function(strs) {
    let commonPrefix = "";
    let shortestWord = strs[0];
    strs.forEach((word) => {
        if(word.length < shortestWord.length) {
            shortestWord = word;
        }
    });

    for (let i = 0; i <= shortestWord.length; i++){
        const isCommonPrefix = strs.every((word) => {
            return word.slice(0, i) === shortestWord.slice(0, i);
        });
        
        if (isCommonPrefix) {
            commonPrefix = shortestWord.slice(0, i);
        } else {
            break;
        }
    }
    
    return commonPrefix;
};

console.log(longestCommonPrefix(["flowers", "flow"]));