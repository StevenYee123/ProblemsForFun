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

// var maxProfit = function(prices) {
//     var min = prices[0]; 
//     var max = 0;
//     for (var i = 0; i < prices.length; i++) {
//         min = Math.min(min, prices[i]);
//         max = Math.max(max, prices[i] - min);
//     }
//     return max;
// };

// ############################################################################################################

// //Kadane's algorithm. 

// var maxSubArray = function(nums) {
//     for (let i = 1; i < nums.length; i++){
//         nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     }
//     return Math.max(...nums);
// };

// ############################################################################################################

var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let maxSoFar = nums[0];
    for (let i = 1;i < nums.length; i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        let currentNum = nums[i];
        curMax = Math.max(currentNum * prevMax, currentNum, currentNum * prevMin);
        
        curMin = Math.min(currentNum * prevMin, currentNum, currentNum * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        maxSoFar = Math.max(curMax, maxSoFar);

        console.log("Current max: " + curMax);
        console.log("Current min: " + curMin);
        console.log("Max so far: " + maxSoFar);
    }

    return maxSoFar;
}

var subsets = function(nums) {
    let result = [];
    dfs([], 0);
    
    function dfs(current, index){
        result.push(current);
        for(let i = index; i < nums.length; i++) {
            dfs(current.concat(nums[i]), i + 1);
        }
    }
    
    return result;
};

var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    let carryOver = 0;
    
    if (digits[digits.length - 1] !== 10){
        return digits;
    } else {
        digits[digits.length - 1] = 0;
        carryOver = 1;
        for (let i = digits.length - 2; i >= 0; i--){
            digits[i] += carryOver;
            console.log(digits[i]);
            carryOver = 0;
            if (digits[i] === 10){
                digits[i] = 0;
                carryOver = 1;
            }
        }
    }

    carryOver === 1 ? digits.unshift(carryOver) : digits;

    return digits;
};

var merge = function(nums1, m, nums2, n) {
    let nums1Idx = 0;
    let nums2Idx = 0;
    let index = 0;
    
    while (nums1Idx < m && nums2Idx < n){
        if (nums1[nums1Idx] >= nums2[nums2Idx]){
            nums1[index++] = nums2[nums2Idx++];
        } else {
            nums1[index++] = nums1[nums1Idx++];
        }
        console.log(nums1);
    }
    
    while (nums1Idx < m){
        nums1[index++] = nums1[nums1Idx++];
    } 
    
    while (nums2Idx < n){
        nums2[index++] = nums2[nums2Idx++];
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));