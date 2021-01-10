const spiralCopy = (nums) => {
    let topRow = 0;
    let bottomRow = nums.length - 1;
    let leftCol = 0; 
    let rightCol = nums[0].length - 1;
    let direction = 0;  
    let answer = [];

    while (topRow <= bottomRow && leftCol <= rightCol){
        direction %= 4;
        if (direction === 0){
            for (let i = leftCol; i <= rightCol; i++){
                answer.push(nums[topRow][i]);
            }
            topRow++;
        } else if (direction === 1){
            for (let i = topRow; i <= bottomRow; i++){
                answer.push(nums[i][rightCol]);
            }
            rightCol--;
        } else if (direction === 2){
            for (let i = rightCol; i >= leftCol; i--){
                answer.push(nums[bottomRow][i]);
            }
            bottomRow--;
        } else if (direction === 3){
            for (let i = bottomRow; i >= topRow; i--){
                answer.push(nums[i][leftCol]);
            }
            leftCol++;
        }
        direction++;
    }

    return answer;
}