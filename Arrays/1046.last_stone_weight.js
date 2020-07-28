var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    
    while(stones.length > 1){
        let max = stones[stones.length - 1];
        let secondMax = stones[stones.length - 2];

        console.log(stones);
        
        if(secondMax === max){
            stones.splice(stones.length - 2);
        } else {
            stones[stones.length - 1] = max - secondMax;
            //Keep the reduced max
            let temp = stones.pop();
            //Destroy the second stone completely
            stones.pop();
            let newIdx = findIdx(stones, temp);
            stones.splice(newIdx, 0, temp);
        }

    }
    
    if(stones.length === 1){
        return stones[0];
    } else {
        return 0;
    }
};

let findIdx = (arr, target) => {
    if(target <= arr[0]) return 0;
    if(target >= arr[arr.length - 1]) return arr.length;
    
    let left = 0;
    let right = 0;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) return mid;
        if(arr[mid] > target){
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(lastStoneWeight([5, 1, 8, 10, 7]));
// console.log(findIdx([1, 5, 7, 8, 10], 2));