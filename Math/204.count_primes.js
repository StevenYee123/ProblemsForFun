var countPrimes = function(n) {
    let primes = new Array(n).fill(true);
    primes[0] = false;
    primes[1] = false;
    
    //For every prime number the next multiple after will be false
    for(let i = 2; i * i < n; i++){
        if(primes[i]){
            for(let j = i * i; j < n; j += i){
                primes[j] = false;
            }
        }
    }
    
    return primes.filter((ele) => ele === true).length;
};