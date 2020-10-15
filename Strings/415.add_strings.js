var addStrings = function(num1, num2) {
    let num1Idx = num1.length - 1;
    let num2Idx = num2.length - 1;
    
    let result = [];
    let carryOver = 0;
    
    while(num1Idx !== -1 || num2Idx !== -1){
        let num1Digit = num1Idx === -1 ? 0 : +num1[num1Idx];
        let num2Digit = num2Idx === -1 ? 0 : +num2[num2Idx];
        
        let sum = num1Digit + num2Digit + carryOver;
        carryOver = 0;

        if(sum > 9){
            sum %= 10;
            carryOver = 1;
        }
        
        result.unshift(sum);
        
        if(num1Idx !== -1) num1Idx--;
        if(num2Idx !== -1) num2Idx--;
    }
    
    if(carryOver) result.unshift(carryOver);
    
    return result.join("");
};

console.log(addStrings("9", "99"));