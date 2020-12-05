const decodeString = s => {
    let digits = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
    const stack = [];
    
    for (const char of s) {
        if (char !== "]") { 
            stack.push(char); 
            continue; 
        }
        
        let cur = stack.pop();
        let str = '';
        
        while (cur !== '[') {
            str = cur + str;
            cur = stack.pop();
        }
        
        let num = '';
        cur = stack.pop();
        
        while (digits.has(cur)) {
            num = cur + num;
            cur = stack.pop();
        }
        
        stack.push(cur);
        stack.push(str.repeat(parseInt(num)));
    }
    
    return stack.join('');
};