var maxProfit = function(prices) {
    let profit = 0;
    
    for(let i = 1; i < prices.length; i++){
        let prev = prices[i - 1];
        let curr = prices[i];
        
        if(prev < curr) profit += curr - prev;
    }
    
    return profit;
};