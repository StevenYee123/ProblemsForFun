var maxProduct = function(nums) {
    let prevMin = nums[0];
    let prevMax = nums[0];
    let max = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        let curr = nums[i];
        
        let currMax = Math.max(curr * prevMax, curr, curr * prevMin);
        let currMin = Math.min(curr * prevMax, curr, curr * prevMin);
        
        prevMin = currMin;
        prevMax = currMax;
        
        max = Math.max(max, currMax);
    }
    
    return max;
};