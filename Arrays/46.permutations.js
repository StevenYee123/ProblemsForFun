var permute = function(nums, set = [], answers = []) {
    if (!nums.length) answers.push([...set]);
    //Setup to choose each index to start from
    for(let i = 0; i < nums.length; i++){
        const newNums = nums.filter((n, index) => index !== i);
        set.push(nums[i]);
        //This sets up backtracking  
        permute(newNums, set, answers);
        //Very important to pop! Prevents the same index from being reused 
        set.pop();
    }  
    
    return answers;
};