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

// var myPow = function(x, n) {
//     if (n === 0) return 1;

//     console.log("This is x right now: " + x);
//     console.log("This is pow right now: " + n);
    
//     let pow = Math.abs(n);
    
// 	let result = pow % 2 === 0 ? myPow(x*x, pow/2) : x * myPow(x*x, (pow-1) / 2);
    
//     return n < 0 ? 1 / result : result;
// };

// console.log(myPow(3, 4));

var maxProfit = function(prices) {
    var min = prices[0]; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));