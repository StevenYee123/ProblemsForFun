const romanToInt = (s) => {
    let romanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let total = 0;
    for (let i = 0; i < s.length; i++){
        let current = romanToInt[s[i]];
        let next = romanToInt[s[i + 1]];
        
        if (next > current){
            total += next - current;
            i++;
        } else {
            total += current;
        }
    }
    
    return total;
}