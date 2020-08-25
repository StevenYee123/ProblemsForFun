var reverseOnlyLetters = function(S) {
    //Use a hash to keep track of all non-letter characters
    let indices = {};
    let reversed = [];
    let result = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    alphabet = new Set(alphabet);
    
    for(let i = 0; i < S.length; i++){
        let curr = S[i];
        if(alphabet.has(curr)) {
            reversed.push(curr);
        } else {
            indices[i] = curr;
        }
    }
    
    for(let j = 0; j < S.length; j++){
        if(indices[j] !== undefined){
            result += indices[j];
        } else {
            result += reversed.pop();
        }
    }
    
    return result;
};