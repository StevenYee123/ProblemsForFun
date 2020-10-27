var removeDuplicates = function(nums) {
    //First num guaranteed to be unique
    let index = 1;

    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] !== nums[i + 1]){
            //Increment the index and build the 'unique array'
            nums[index++] = nums[i + 1];
        }
    }
    //index kept track of length the whole time
    return index;
};
