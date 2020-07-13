var checkIfExist = function(arr) {
    let set = new Set(arr);
    if (set.size === 1 && set.has(0)) return true;
    
    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i] * 2) && arr[i] !== 0) return true;
    }
    
    return false;
};