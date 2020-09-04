var threeSumClosest = function(nums, target) {
    //Sorting plays a huge role!!
    nums.sort((a, b) => a - b);
    
    let closest = Infinity;
    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            if(Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
            if(sum > target){
                right--;
            } else {
                left++;
            }
        }
    }
    
    return closest;
};