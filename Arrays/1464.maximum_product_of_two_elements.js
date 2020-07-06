var maxProduct = function(nums) {
    let max = Math.max(nums[0], nums[1]);
    let secondMax = Math.min(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++){
        if (nums[i] >= max){
            let temp = max;
            max = nums[i];
            secondMax = temp;
            continue;
        }
        
        if (nums[i] <= max && nums[i] > secondMax){
            secondMax = nums[i];
        }
    }
    
    return ((max - 1) * (secondMax - 1));
};