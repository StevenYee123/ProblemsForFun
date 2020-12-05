var trap = function(height) {
    if(height === null) return 0;
    
    let totalWater = 0;
    let length = height.length;
    
    let leftMax = [];
    let rightMax = [];
    
    leftMax[0] = height[0];

    for(let i = 1; i < length; i++){
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }
    
    rightMax[length - 1] = height[length - 1];
    for(let i = length - 2; i >= 0; i--){
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }
    
    //Start at value of index 1 because if rain fell on it it would all drain to the left
    //Same principles apply to the right side
    for(let i = 1; i < length - 1; i++){
        //Subtract min between left and right water levels - height of building on that index
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return totalWater;
};