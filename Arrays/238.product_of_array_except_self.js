const productExceptSelf = (nums) => {
  let output = [];
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= rightProduct;
    rightProduct *= nums[j];
  }

  return output;
};
