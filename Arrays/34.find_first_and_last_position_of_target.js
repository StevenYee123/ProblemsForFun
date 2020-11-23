var searchRange = function(nums, target) {
    if(!nums.length) return [-1, -1];
    
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === target){
            left = mid;
            right = mid;
            break;
        }
        
        if(nums[mid] > target){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    while(nums[left] === target) left--;
    while(nums[right] === target) right++;
    
    return left === right ? [-1, -1] : [left + 1, right - 1];
};

// var searchRange = function(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
    
//     while(left <= right){
//         let mid = Math.floor((left + right)/2);  
//         if(nums[mid] === target){
//             left = mid;
//             right = mid;
//             break;
//         }
        
//         if(nums[mid] > target){
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
    
//     if(left > right) return [-1, -1];
    
//     while(nums[left] === target) left--;
//     while(nums[right] === target) right++;
    
//     return [left + 1, right - 1];
// };