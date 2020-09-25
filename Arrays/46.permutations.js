var permute = function(nums, set = [], answers = []) {
    if (!nums.length) answers.push([...set]);
    
    for(let i = 0; i < nums.length; i++){
        const newNums = nums.filter((n, index) => index !== i);
        set.push(nums[i]);
        permute(newNums, set, answers);
        //Very important to pop! Prevents the same index from being reused 
        set.pop();
    }  
    
    return answers;
};