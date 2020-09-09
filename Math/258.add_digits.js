var addDigits = function(num) {
    while(num > 9){
        num = helper(num);
    }
    
    return num;
};

const helper = (num) => {
    let root = 0;
    while(num > 0){
        root += num % 10;
        num = Math.floor(num/10);
    }
    
    return root;
}

console.log(addDigits(38));