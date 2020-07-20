var combinationSum = function(candidates, target, index = 0, current = [], combinations = []) {
    if (target <= 0) {
        //Take care of the case that this is a correct combination of numbers  
        if (target === 0) combinations.push(current.slice());
        return
    };
    
    //Take into account for index being greater than candidates length
    if (index < candidates.length){
        //Assign value to be candidates array at the current index
        const value = candidates[index];
        //Add that value to our current array of items
        current.push(value);
        //Here we make a recursive call, changing the target 
        combinationSum(candidates, target - value, index, current, combinations);
        //We finished one branch of the tree, now we pop an item off the end and               continue
        //With other possibilities
        current.pop();
        combinationSum(candidates, target, index + 1, current, combinations);
    }
    return combinations;
};