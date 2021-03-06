

// Best time to buy and sell stock  
var maxProfit = function(prices) {
    var min = prices[0];  
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};