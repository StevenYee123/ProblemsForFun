var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b);
    let diff = Math.abs(arr[0] - arr[1]);
    
    for (let i = 1; i < arr.length - 1; i++){
        let currentDiff = Math.abs(arr[i] - arr[i + 1]);
        if (currentDiff !== diff) return false;
    }
    
    return true;
};