var canJump = function(nums) {
    let idx = 0;
    let max = 0;
    while(idx < nums.length - 1){
        max = Math.max(max, idx + nums[idx]);
        if(max >= nums.length - 1) return true;
        if(max === idx && nums[idx] === 0) return false;
        
        idx++;
    }
    
    return true;
};