var threeSum = function (nums) {
  let result = [];
  //Sorting plays a big role!
  nums.sort((a, b) => a - b); //Sorts nums from least to greatest
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    // i is the current index we are starting from.
    // left is the next pointer
    // right is the third pointer

    if (nums[i] === nums[i - 1]) continue;

    left = i + 1;
    right = nums.length - 1;
    let sum = 0;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (right > left && nums[right] === nums[right + 1]) right--;
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }

  return result;
};
